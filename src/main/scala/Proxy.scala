package info.dynagoya

import unfiltered.request._
import unfiltered.response._

object Proxy {
  object URL extends Params.Extract("remote", Params.first)
  
  import dispatch._
  def filter : unfiltered.filter.Plan.Intent = {
    case Path(Seg(Nil)) => Redirect("index.html")
    case PUT(_) & Auth.Write(_) => Pass
    case PUT(_) & Auth.NoWrite(_) => Status(503)
    case GET(_) & Auth.Write(_) & Params(URL(remoteURL)) =>
      Ok ~> Binary( out => Access.http ( url(remoteURL) >>> out))
  }

  case class Binary(f: (java.io.OutputStream => Unit)) extends Responder[Any]{
    def respond(res: HttpResponse[Any]) {
      try{
	f(res.outputStream)
      }finally{
	res.outputStream.close()
      }
    }
  }

}
