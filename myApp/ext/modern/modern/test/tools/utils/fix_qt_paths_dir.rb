#!/usr/bin/env ruby

dir = ARGV[0]
QTDIR = ARGV[1] || ENV["QTDIR_FULL"] || ENV["QTDIR"]
OPENSSLDIR = ARGV[2] || ENV["OPENSSLDIR"]

libs = [
  "phonon",
  "QtCore",
  "QtGui",
  "QtNetwork",
  "QtWebKit",
  "QtXml"
]

ssl = [
  "crypto",
  "ssl"
]

plugins = [
  "gif",
  "jpeg"
]

libs.each do |lib|
  file = "#{lib}"
  filePath = "#{dir}/#{lib}.framework/Versions/4/#{file}"
  `install_name_tool -id #{file} #{filePath}`
  libs.each do |lib2|
    `install_name_tool -change "#{QTDIR}/lib/#{lib2}.framework/Versions/4/#{lib2}" "@loader_path/../../../#{lib2}.framework/Versions/4/#{lib2}" "#{filePath}"`
    `install_name_tool -change "@executable_path/../Frameworks/#{lib2}.framework/Versions/4/#{lib2}" "@loader_path/../../../#{lib2}.framework/Versions/4/#{lib2}" "#{filePath}"`
  end
  ssl.each do |x|
    `install_name_tool -change "#{OPENSSLDIR}/installdir/lib/lib#{x}.1.0.0.dylib" "@loader_path/../../../lib#{x}.1.0.0.dylib" "#{filePath}"`
    `install_name_tool -change "@executable_path/../Frameworks/lib#{x}.1.0.0.dylib" "@loader_path/../../../lib#{x}.1.0.0.dylib" "#{filePath}"`
  end
end

ssl.each do |x|
  file = "lib#{x}.1.0.0.dylib"
  filePath = "#{dir}/#{file}"
  `install_name_tool -id #{file} #{filePath}`
  ssl.each do |y|
    `install_name_tool -change "#{OPENSSLDIR}/installdir/lib/lib#{y}.1.0.0.dylib" "@loader_path/lib#{y}.1.0.0.dylib" "#{filePath}"`
    `install_name_tool -change "@executable_path/../Frameworks/lib#{y}.1.0.0.dylib" "@loader_path/lib#{y}.1.0.0.dylib" "#{filePath}"`
  end
end

plugins.each do |x|
  file = "libq#{x}.dylib"
  filePath = "#{dir}/#{file}"
  `install_name_tool -id #{file} #{filePath}`
  libs.each do |lib|
    `install_name_tool -change "#{QTDIR}/lib/#{lib}.framework/Versions/4/#{lib}" "@loader_path/../Frameworks/#{lib}.framework/Versions/4/#{lib}" "#{filePath}"`
    `install_name_tool -change "@executable_path/../Frameworks/#{lib}.framework/Versions/4/#{lib}" "@loader_path/../Frameworks/#{lib}.framework/Versions/4/#{lib}" "#{filePath}"`
  end
end
