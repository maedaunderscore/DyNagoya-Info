package info.dynagoya

import unfiltered.request._
import unfiltered.response._

import dispatch._
import dispatch.Request._

import oauth._
import oauth.OAuth._

import java.net.URLDecoder.decode

object Twitter {
  val host = :/("api.twitter.com")
  val search = :/("search.twitter.com")

  object Status extends Request(host / "1" / "statuses") {
    val consumer = oauth.Consumer(Keys.Write.consumerKey, Keys.Write.consumerKey_secret)
    val token = oauth.Token(Keys.Write.tokenKey, Keys.Write.tokenKey_secret)

    def update(status: String) = 
      this / "update.json" << Map("status" -> status) <@ (consumer, token)
  }

  object Tweet extends Params.Extract("tweet", Params.first)

  def filter : unfiltered.filter.Plan.Intent = {
    case Path(Seg("tweet":: Nil)) & Auth.Write(user) & Params(Tweet(tweet)) =>
      def withFooter(str:String) = {
      	val footer = " (by %s) #dynagoya".format(user)
      	"%s%s".format(str.take(140 - footer.length), footer)
      }
    val message = decode(tweet, "UTF-8")
    ResponseString(Access.http(Status.update(withFooter(message)) as_str))
  }
}
