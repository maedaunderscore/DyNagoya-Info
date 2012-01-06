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

  def createTable():Unit = S { Store.ddl create }
  def dropTable():Unit = S { Store.ddl drop }

  def list(clazz: String) = {
    val query = for (v <- Store if (v.clazz is clazz)) yield (v.group ~ v.key ~ v.body)
    S{ query list }
  }
  def list(clazz: String, group: String) = {
     val query = for (v <- Store if (v.clazz is clazz) && (v.group is group))
		 yield (v.group ~ v.key ~ v.body)
     S{ query list }
  }

  def search(clazz: String)(key: String) = {
    val query = for (v <- Store 
		     if (v.clazz is clazz) && (v.key is key)) 
		yield (v.group ~ v.key ~ v.body)
    S{ query firstOption }
  }
  def search(clazz: String, group: String)(key: String) = S{
    val query = for (v <- Store 
		     if (v.clazz is clazz) && (v.group is group) && (v.key is key)) 
		yield (v.group ~ v.key ~ v.body)
    S{ query firstOption}
  }

  import scala.util.control.Exception._
  def insert(clazz: String)(key: String, body: String):Either[Throwable, Int] = 
    insert(clazz, "")(key, body)
  def insert(clazz: String, group: String)(key: String, body: String) = S{
    allCatch either { Store.insert(clazz, group, key, body) }
  }
}

