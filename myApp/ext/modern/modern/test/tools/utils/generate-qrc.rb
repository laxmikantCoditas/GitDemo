#!/usr/bin/env ruby

$source_path = ARGV[0]
prefix = ARGV[1]

#files = `cd #{$source_path} && find * -type f`.split("\n")
Dir.chdir $source_path
files = Dir.glob("**/*")

def get_file_listing files, indent_size
  indent = ' ' * indent_size
  files.map do |f|
    file_path = File.join($source_path, f)
    if File.directory?(f)
      ""
    else
      "#{indent}<file alias=\"#{f}\">#{file_path}</file>"
    end
  end.join("\n")
end

puts <<RCC
<RCC>
    <qresource prefix="/#{prefix ? prefix + "/" : ""}">
#{get_file_listing(files, 8)}
    </qresource>
</RCC>
RCC
