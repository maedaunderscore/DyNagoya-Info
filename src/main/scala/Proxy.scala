package info.dynagoya

import unfiltered.request._
import unfiltered.response._

import dispatch._
import dispatch.twitter._

import org.clapper.avsl.Logger

import java.net.URLDecoder.decode

/** unfiltered plan */
class Proxy extends unfiltered.filter.Plan {
  import QParams._

  val logger = Logger(classOf[App])
  val whiteList = List("maeda_", "t6s", "dico_leque", "machimotako", "bleis",
		       "clairvy", "yusuke_kokubo", "lgfuser", "b1tl1fe", "sunflat",
		       "umejava", "sumim")

  case class Binary(f: (java.io.OutputStream => Unit)) extends Responder[Any]{
    def respond(res: HttpResponse[Any]) {
      try{
	f(res.outputStream)
      }finally{
	res.outputStream.close()
      }
    }
  }

  val h = new Http

  object Session{
    import javax.servlet.http.HttpServletRequest
    def unapply(r: HttpRequest[HttpServletRequest]) = Some(r.underlying.getSession(true))
  }

  object Log {
    val SessionUserName = "name"
    val con = oauth.Consumer(Keys.Auth.consumerKey, Keys.Auth.consumerKey_secret)

    import javax.servlet.http.HttpServletRequest
    object In{
      def unapply(r: HttpRequest[HttpServletRequest]) = r match {
	case Session(ss) => 
	  if (ss.getAttribute(SessionUserName) == null) None 
	  else Some(ss.getAttribute(SessionUserName).toString)
      }
    }

    object NotIn{
      def unapply(r: HttpRequest[HttpServletRequest]) = In.unapply(r) match {
	case Some(_) => None
	case None => Some(())
      }
    }

    object Authorize{
      def unapply(r: HttpRequest[HttpServletRequest]) = r match {
	case Session(ss) => 
	  val tok = h(Auth.request_token(con, "http://dynagoya.info/authorized"))
	  ss.setAttribute("secret_token", tok.secret)
	  Some(tok)
	case _ => None
      }
    }
    object Authorized{
      def unapply(r: HttpRequest[HttpServletRequest]) = r match {
	case GET(_) & Params(params) & Session(ss) if params.contains("oauth_verifier") =>
	  for{
	    Seq(token) <- params.get("oauth_token")
	    Seq(verifier) <- params.get("oauth_verifier")
	    secret_token <- Option(ss.getAttribute("secret_token").asInstanceOf[String])
	    (_, _, name) <- Some(h(Auth.access_token(
				  con, 
				  oauth.Token(token, secret_token), 
				  verifier)))
	  } yield 
	    if (whiteList.contains(name)) {
	      ss.setAttribute(SessionUserName, name)
	      "/index.html"
	    } else "/login_failed.html"
      }
    }
  }
 
  def intent = {
    case Path(Seg(Nil)) => Redirect("index.html")
    case Path(Seg("login" :: Nil)) & Log.Authorize(tok) => 
      Redirect(Auth.authorize_url(tok).to_uri.toString)
    case Path(Seg("logout" :: Nil)) & Session(ss) => {
      ss.invalidate
      Redirect("/index.html")
    }
    case Path(Seg("authorized" :: Nil)) & Log.Authorized(redirectUrl) => 
      Ok ~> Redirect(redirectUrl)
    case Path(Seg("name":: Nil)) & Log.In(user) => 
      Ok ~> ResponseString(user)
    case PUT(_) & Log.In(_) => Pass
    case PUT(_) & Log.NotIn(_) => Status(503)
    case Path(Seg("tweet":: msg :: Nil)) & Log.In(user) =>
      def withFooter(str:String) = {
      	  val footer = " (by %s) #dynagoya".format(user)
      	  "%s%s".format(str.take(140 - footer.length), footer)
      }
      ResponseString(h(
        twitter.Status.update(withFooter(decode(msg, "UTF-8"))) as_str))
    case GET(_) & Log.In(_) & Params(params) if params.contains("remote")=>
      Ok ~> Binary( out =>
	h ( url(params("remote").mkString) >>> out)
      )
    case _ => Pass
  }

}
