1. Download Chromium Source (no need to compile just download)
-- http://www.chromium.org/developers/how-tos/get-the-code
-- Follow the "Boostrap using the tarball" instructions
-- gclient sync --force

2. Set CHROMIUM_SRC env variable 
-- export CHROMIUM_SRC = /Users/{username{}}/chromium/home/src_tarball/tarball/chromium/src/
-- likely best to set this in ~/.bash_profile so it is persistent

3. Add UserAgent to results
-- Open $CHROMIUM_SRC/tools/perf/measurements
-- Open loading_timeline.py
-- Add results.Add("UserAgent", "", tab.EvaluateJavaScript("navigator.userAgent")) to line 33
-- Open smoothness.py
-- Add results.Add("UserAgent", "", tab.EvaluateJavaScript("navigator.userAgent")) to line 80

4. Install NodeJS
-- http://nodejs.org/

TopCoat Integration
4. Install MongoDB
-- http://www.mongodb.org/downloads
-- OSX instructions here (http://www.mkyong.com/mongodb/how-to-install-mongodb-on-mac-os-x/)
-- start monogod

5. (Download or clone Topcoat server) OR (Browse to touch/tools/test/telemetry/topcoat-server-master)
-- https://github.com/topcoat/topcoat-server
-- Inside of topcoat server directory run "npm start" (monogoDB should be running prior to this)

6. Sencha Integration
-- inside touch/tools/test/telemetry
-- run 'npm install'
-- run grunt telemetry

Notes
Currently waiting on this bug for scrolling support
https://code.google.com/p/chromium/issues/detail?id=271591
