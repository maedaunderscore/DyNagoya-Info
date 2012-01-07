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
  implicit def forComposite[A, B](f1: A => B) = new {
    def >>[C] (f2: B => C) = (x : A) => f2(f1(x))
  }

  private def jsonResponse = toJson _ >> ResponseString.apply
  private def intResponse(x:Int) = ResponseString(x.toString)

  def filter = Auth.Anonymouse{
    case GET(_) & Path(Seg("data" :: clazz :: Nil)) =>
      DB.list(clazz) |> jsonResponse
    case GET(_) & Path(Seg("data" :: clazz :: group :: Nil)) =>
      DB.list(clazz, group) |> jsonResponse
  } orElse Auth.LoginOnly {
    case PUT(_) & Path(Seg("data" :: clazz :: key :: Nil)) & Params(Body(body)) =>
      DB.write(clazz, "")(key, body) |> intResponse
    case PUT(_) & Path(Seg("data" :: clazz :: group :: key :: Nil)) & Params(Body(body)) =>
      DB.write(clazz, group)(key, body)  |> intResponse
    case DELETE(_) & Path(Seg("data" :: clazz :: key :: Nil)) =>
      DB.delete(clazz, "")(key) |> intResponse
    case DELETE(_) & Path(Seg("data" :: clazz :: group :: key :: Nil)) =>
      DB.delete(clazz, group)(key) |> intResponse
  }
}
