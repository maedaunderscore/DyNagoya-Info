package info.dynagoya

object Access{
  def http[T](handler : dispatch.Handler[T]) = (actor !? handler).asInstanceOf[T]

  val actor = new scala.actors.DaemonActor {
    val h = new dispatch.Http

    def act = loop{
      receive {	case hand : dispatch.Handler[_] => reply(h(hand)) }
    }

    start
  }
}
