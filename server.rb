#! /usr/bin/env ruby

require 'rubygems'
require 'rack'
require 'adsf'

Rack::Mime::MIME_TYPES['.manifest'] = 'text/cache-manifest'

app = Rack::Builder.new do
  use Rack::CommonLogger
  use Rack::ShowExceptions
  use Rack::Lint
  use Adsf::Rack::IndexFileFinder, :root => 'output'
  run Rack::File.new('output')
end.to_app

# Run
Rack::Handler::WEBrick.run(app, :Port => 3000)