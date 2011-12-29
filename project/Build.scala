import sbt._
import sbt.Keys._


object RTMBuild extends Build {
  lazy val root = Project( "root", file("."), settings = Defaults.defaultSettings)
  
  val commit = TaskKey[Int]("commit", "kick git commit")

  val smalltalkDirectory = SettingKey[File]("smalltalk-directory", "")
}
