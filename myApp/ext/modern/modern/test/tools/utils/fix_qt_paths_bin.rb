#!/usr/bin/env ruby

file = ARGV[0]

libs = [
  "phonon",
  "QtCore",
  "QtGui",
  "QtNetwork",
  "QtWebKit",
  "QtXml"
]
QTDIR = ARGV[1] || ENV["QTDIR_FULL"] || ENV["QTDIR"]
OPENSSLDIR = ARGV[2] || ENV["OPENSSLDIR"]

libs.each do |lib|
  `install_name_tool -change "#{QTDIR}/lib/#{lib}.framework/Versions/4/#{lib}" "@executable_path/Frameworks/#{lib}.framework/Versions/4/#{lib}" "#{file}"`
end

ssl = [
  "crypto",
  "ssl"
]

ssl.each do |x|
  `install_name_tool -change "#{OPENSSLDIR}/installdir/lib/lib#{x}.1.0.0.dylib" "@executable_path/Frameworks/lib#{x}.1.0.0.dylib" "#{file}"`
end
