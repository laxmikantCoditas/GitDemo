#!/bin/sh
javac qa/*.java
jar cvf qa.jar qa
jarsigner qa.jar yhwh