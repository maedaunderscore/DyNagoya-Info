package info.dynagoya

import unfiltered.request._
import unfiltered.response._

import dispatch._
import dispatch.twitter.{Auth => TwitterAuth, _}

object Auth{
  val whiteList = List("maeda_", "t6s", "dico_leque", "machimotako", "bleis",
		       "clairvy", "yusuke_kokubo", "lgfuser", "b1tl1fe", "sunflat",
		       "umejava", "sumim", "SergeStinckwich")
  
  val SessionUserName = "name"
  val SessionWritable = "writable"

  val con = oauth.Consumer(Keys.Auth.consumerKey, Keys.Auth.consumerKey_secret)

  type Request = HttpRequest[javax.servlet.http.HttpServletRequest]
  type Extractor[A] = { def unapply(r: Request):Option[A] }
  def Not[A]( base: Extractor[A]) = new {
    def unapply(r: Request) = base.unapply(r) match {
      case Some(_) => None
      case None => Some(())
    }
  }

  val LogIn = new{
    def unapply(r: Request) = r match {
      case Session(ss) => 
	Option(ss.getAttribute(SessionUserName)) map {_.toString}
    }
  }

  val Write = new {
    def unapply(r: Request) = r match {
      case Session(ss) => 
	for{
	  writable <- Option(ss.getAttribute(SessionWritable))
	  if writable.toString == "true"
	  user <- Option(ss.getAttribute(SessionUserName))
	} yield user
    }
  }

  val NotLogIn = Not(LogIn)
  val NoWrite = Not(Write)

  object Session{
    def unapply(r: Request) = Some(r.underlying.getSession(true))
  }
  
  import unfiltered.filter.Plan.Intent

  object Anonymouse{
    def apply(base: Intent) = base
  }
  object LoginOnly{
    val login:Intent = { case LogIn(_) => Ok }
    def apply(base: Intent) = new Intent{
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
      def accessToken(token: String, secret_token: String, verifier: String) = Access.http(
	TwitterAuth.access_token(con, oauth.Token(token, secret_token),  verifier)
      )

      for{
	Seq(token) <- params.get("oauth_token")
	Seq(verifier) <- params.get("oauth_verifier")
	secret_token <- Option(ss.getAttribute("secret_token").asInstanceOf[String])
      } yield {
	val (_, _, name) = accessToken(token, secret_token, verifier)
	ss.setAttribute(SessionUserName, name)
	ss.setAttribute(SessionWritable, whiteList.contains(name))
      }

      Ok ~> Redirect("index.html")
  }
}
