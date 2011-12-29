package info.dynagoya.twitter

import info.dynagoya.Keys

import dispatch._

import oauth._
import oauth.OAuth._
import dispatch.Request._

object Twitter {
  val host = :/("api.twitter.com")
  val search = :/("search.twitter.com")
}

object Status extends Request(Twitter.host / "1" / "statuses") {
  val consumer = oauth.Consumer(Keys.Write.consumerKey, Keys.Write.consumerKey_secret)
  val token = oauth.Token(Keys.Write.tokenKey, Keys.Write.tokenKey_secret)

  def update(status: String) = 
    this / "update.json" << Map("status" -> status) <@ (consumer, token)
}
