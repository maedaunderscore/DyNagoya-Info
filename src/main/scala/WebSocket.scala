object WebSocket extends App{
  import unfiltered.netty.websockets._
  import unfiltered.util._
  import scala.collection.mutable.ConcurrentMap
  import unfiltered.response.ResponseString

  import scala.collection.JavaConversions._
  val sockets: ConcurrentMap[Int, WebSocket] =
    new java.util.concurrent.ConcurrentHashMap[Int, WebSocket]

  def notifyMessage(msg: String) = sockets.values.foreach { s =>
    if(s.channel.isConnected) s.send(msg)
  }

  val server = new scala.actors.DaemonActor {
    import scala.actors.remote._
    import scala.actors.remote.RemoteActor._

    def act = {
      alive(9001)
      register('server, this)

      loop{ receive {
	  case x:String => println(x);notifyMessage(x)
      }}
    }
    start
  }    
  def notifyCount() = notifyMessage("""counter("%s")""".format(sockets.size))

  unfiltered.netty.Http(5679).handler(unfiltered.netty.websockets.Planify({
  case _ => {
          case Open(s) =>
            sockets += (s.channel.getId.intValue -> s)
          notifyCount()
          case Message(s, Text(msg)) =>
            notifyMessage("%s|%s" format(s.channel.getId, msg))
          case Close(s) =>
            sockets -= s.channel.getId.intValue
          notifyCount()
          case Error(s, e) =>
            e.printStackTrace
	    }
      })
      .onPass(_.sendUpstream(_)))
      .handler(unfiltered.netty.cycle.Planify{
      case _ => ResponseString("not a websocket")
      }).run
}
