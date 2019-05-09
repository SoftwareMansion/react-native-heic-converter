
Pod::Spec.new do |s|
  s.name         = "RNHeicConverter"
  s.version      = "1.2.0"
  s.summary      = "RNHeicConverter"
  s.description  = "RNHeicConverter"
  s.homepage     = "https://github.com/maxim-kolesnikov/react-native-heic-converter#readme"
  s.license      = "MIT"
  s.author       = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNHeicConverter.git", :tag => "master" }
  s.source_files  = "RNHeicConverter/**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
end

  
