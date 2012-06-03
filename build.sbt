organization := "com.example"

name := "Routine Task Manager"

version := "0.1.0-SNAPSHOT"

libraryDependencies ++= Seq(
   "net.databinder" %% "unfiltered-filter" % "0.6.0",
//   "net.databinder" %% "unfiltered-filter" % "0.6.0",
   "javax.servlet" % "servlet-api" % "2.3" % "provided",
   "org.eclipse.jetty" % "jetty-webapp" % "7.4.5.v20110725" % "jetty",
   "org.clapper" %% "avsl" % "0.3.6",
   "net.databinder" %% "dispatch-http" % "0.8.7",
   "net.databinder" %% "dispatch-oauth" % "0.8.7",
   "org.scalaquery" % "scalaquery_2.9.0-1" % "0.9.5",
   "com.h2database" % "h2" % "1.2.140",
   "net.databinder" % "unfiltered-netty-server_2.9.1" % "0.6.2",
   "net.liftweb" % "lift-json_2.8.1" % "2.3"
)

seq(webSettings :_*)

//commit := { """echo git commit -a -m ""%s"""".format(new java.util.Date) ! } 
commit := { """git --git-dir=webdav/amber/task/.git --work-tree=webdav/amber/task/ commit -a -m "%s"""".format(new java.util.Date) !}


