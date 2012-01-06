package info.dynagoya

import unfiltered.request._
import unfiltered.response._

import dispatch._
import dispatch.twitter.{Auth => TwitterAuth, _}

object Auth{
  object Session{
    import javax.servlet.http.HttpServletRequest
    def unapply(r: HttpRequest[HttpServletRequest]) = Some(r.underlying.getSession(true))
  }

  val whiteList = List("maeda_", "t6s", "dico_leque", "machimotako", "bleis",
		       "clairvy", "yusuke_kokubo", "lgfuser", "b1tl1fe", "sunflat",
		       "umejava", "sumim", "SergeStinckwich")
  
  val SessionUserName = "name"
  val SessionWritable = "writable"

  val con = oauth.Consumer(Keys.Auth.consumerKey, Keys.Auth.consumerKey_secret)

  import javax.servlet.http.HttpServletRequest

  def Not[A]( base: HttpRequest[HttpServletRequest] =>  Option[A] ) = 
    new {
      def unapply(r: HttpRequest[HttpServletRequest]) = 
	base(r) match {
	  case Some(_) => None
	  case None => Some(())
	}
    }

  val Write = new {
    def unapply(r: HttpRequest[HttpServletRequest]) = r match {
      case Session(ss) => 
	Option(ss.getAttribute(SessionWritable)) map {_.toString } collect {
	  case "true" => ()
	}
    }
  }

  val LogIn = new {
    def unapply(r: HttpRequest[HttpServletRequest]) = r match {
      case Session(ss) => 
	Option(ss.getAttribute(SessionUserName)) map {_.toString}
    }
  }

  val NoWrite = Not(Write.unapply)
  val NotLogIn = Not(LogIn.unapply)
  
  import unfiltered.filter.Plan.Intent

  object LoginOnly{
    val login:Intent = { case LogIn(_) => Ok }
    def apply(base: Intent) = new Intent{
      type Request = unfiltered.request.HttpRequest[javax.servlet.http.HttpServletRequest]
      override def apply(x: Request) = base.apply(x)
      override def isDefinedAt(x: Request) = login.isDefinedAt(x) && base.isDefinedAt(x)
    }
  }

  def filter : Intent = {
    case Path(Seg("name":: Nil)) & LogIn(user) => 
      PlainTextContent ~> ResponseString(user)
    case Path(Seg("login" :: Nil)) & Session(ss) => 
      val tok = Access.http(
	TwitterAuth.request_token(con, Keys.host + "/authorized")
      )
      ss.setAttribute("secret_token", tok.secret)
      Redirect(TwitterAuth.authorize_url(tok).to_uri.toString)
    case Path(Seg("logout" :: Nil)) & Session(ss) => {
      ss.invalidate
      Redirect("/index.html")
    }
    case Path(Seg("authorized" :: Nil)) & Params(params) & Session(ss) => 
      for{
	Seq(token) <- params.get("oauth_token")
	Seq(verifier) <- params.get("oauth_verifier")
	secret_token <- Option(ss.getAttribute("secret_token").asInstanceOf[String])
	(_, _, name) <- Some(Access.http(TwitterAuth.access_token(
	  con, 
	  oauth.Token(token, secret_token), 
	  verifier)))
      } yield {
	ss.setAttribute(SessionUserName, name)
	ss.setAttribute(SessionWritable, whiteList.contains(name))
      }

      Ok ~> Redirect("index.html")
  }
}
