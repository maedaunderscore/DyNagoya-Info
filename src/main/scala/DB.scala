package info.dynagoya

import org.scalaquery.session._
import org.scalaquery.session.Database.threadLocalSession
import org.scalaquery.ql._
import org.scalaquery.ql.TypeMapper._
import org.scalaquery.ql.extended.H2Driver
import org.scalaquery.ql.extended.H2Driver.Implicit._
import org.scalaquery.ql.extended.{ExtendedTable => Table}

trait DBSetting{
  lazy val db = Database.forURL("jdbc:h2:./database", driver = "org.h2.Driver") 
}

object DB extends DBSetting{
  val Store = new Table[(String, String, String, String)]("Store") {
    def clazz = column[String]("class")
    def group = column[String]("group")
    def key = column[String]("key")
    def body = column[String]("body", O.DBType("varchar(4096)"))
    def pk = primaryKey("pk_Store", clazz ~ group ~ key)
    def * = clazz ~ group ~ key ~ body
    def m = group ~ key ~ body
  }

  def S[T](f : => T) = db.withSession(f)
  import scala.util.control.Exception._
  def Exceptional[T](f : => T) = S{ allCatch either f }


  def createTable():Unit = S { Store.ddl create }
  def dropTable():Unit = S { Store.ddl drop }

  def query(clazz: String, group: Option[String] = None, key: Option[String] = None) = 
    ((Store.where(_.clazz === clazz) /: group) { (query, value) =>
      query.where(_.group === value)
    } /: key) { (query, value) =>
      query.where(_.key === value)
    }.map{ v => v.group ~ v.key ~ v.body }

  def list(clazz: String) = S{ query(clazz) list }
  def list(clazz: String, group: String) = S{ query(clazz, Some(group)) list }

  def search(clazz: String)(key: String) = S{
    query(clazz, None, Some(key)) firstOption
  }

  def search(clazz: String, group: String)(key: String) = S{
    query(clazz, Some(group), Some(key)) firstOption
  }

  def write(clazz: String, group: String)(key: String, body: String) = S{
    val q = query(clazz, Some(group), Some(key))
    q firstOption match {
      case Some(_) => q.update(group, key, body)
      case None => Store.insert(clazz, group, key, body) 
    }
  }

  def delete(clazz: String, group: String)(key: String) = S{
    Store.where(v => (v.clazz is clazz) && (v.group is group) && (v.key is key)).delete
  }
}
