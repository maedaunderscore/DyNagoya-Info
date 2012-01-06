package info.dynagoya

import unfiltered.request._
import unfiltered.response._

import org.clapper.avsl.Logger

class Server extends unfiltered.filter.Plan {
  import QParams._

  val logger = Logger(classOf[App])

  def intent = (
    Auth.filter orElse 
    DataStore.filter orElse 
    Twitter.filter orElse
    Proxy.filter orElse
    { case _ => Pass }
  )
}
