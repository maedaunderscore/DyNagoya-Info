package info.dynagoya

import unfiltered.request._
import unfiltered.response._

object DataStore {
  object Body extends Params.Extract("body", Params.first)

  private def toJson(xs: Seq[(String, String, String)]) = xs map {
    case (group, key, body) => 
      """{"group":"%s", "key":"%s", "body":%s}""".format(group, key, body)
  } mkString("[", ",", "]")

  implicit def forPipe[A](x : A) = new {
    def |>[B] (f: (A => B)) = f(x)
  }

  private def insertResponse[T] = (_:Either[Throwable, Int]) match {
    case Left(ex) => Status(500) ~> ResponseString(ex.toString)
    case Right(_) => Status(200)
  }

  import unfiltered.filter.Plan.Intent
  def filter:Intent = ({
    case GET(_) & Path(Seg("data" :: clazz :: Nil)) =>
      DB.list(clazz) |> toJson |> ResponseString.apply
    case GET(_) & Path(Seg("data" :: clazz :: group :: Nil)) =>
      DB.list(clazz, group) |> toJson |> ResponseString.apply
  }:Intent) orElse Auth.LoginOnly {
    case PUT(_) & Path(Seg("data" :: clazz :: key :: Nil)) & Params(Body(body)) =>
      DB.insert(clazz)(key, body) |> insertResponse
    case PUT(_) & Path(Seg("data" :: clazz :: group :: key :: Nil)) & Params(Body(body)) =>
      DB.insert(clazz, group)(key, body) |> insertResponse
  }
}
