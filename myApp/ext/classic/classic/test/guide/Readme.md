HOW TO RUN THE TESTS
====================


1 - Setup
---------

First of all you need to install the last version of Sencha cmd. (4.0.x branch) 

At the time I write this tutorial you may want to download and install the last version of sencha cmd at http://teamcity.sencha.com/viewType.html?buildTypeId=bt229
Then in your favorite shell

    $ sencha repo add experimental http://qa.sencha.com/knightly/cmd/packages/
    $ sencha repo sync experimental # Not sure this one is needed but just in case
    $ sencha package install cmd-test


Here the list of currently supported browsers for testing:
* Chrome
* Internet Explorer
* Firefox
* Safari
* PhantomJS

2 - Testing from command line
-----------------------------

First cd in the SDK/ext folder

Running the Ext.data with phantomjs in quirks mode
    $ sencha test run --browser=phantomjs --mode=quirks test/specs/data/

Running the Ext.data and Ext.util specs with chrome in strict mode
    $ sencha test run --browser=chrome --mode=strict test/specs/data/,test/specs/util/

Running only one spec with firefox in strict mode
    $ sencha test run --browser=firefox --mode=strict test/specs/data/Model.js 

Running only one spec with firebug in debugging mode (firebug will stop on any debugger statement)
    $ sencha test run --browser=firefox --debug --mode=strict test/specs/data/Model.js 


3 - Testing from the Cmd Test Web Console (Basics)
--------------------------------------------------

First cd in the SDK/ext folder

Running the Ext.data specs
    $ sencha test console test/specs/data/

Then open http://localhost:54321/ with your favorite browser.

You should see something like that.

![Screenshot1](sc1.png?raw=true "Screenshot 1")

Now select a browser in the north west panel and press "Start". Wait for the tests to complete. 
Then drill down the tests tree result and select a KO cell.

![Screenshot2](sc2.png?raw=true "Screenshot 2")

Let's click on the Debug tab.

![Screenshot3](sc3.png?raw=true "Screenshot 3")

You can see all the function executed by the spec including beforeEach and afterEach functions.
If you click on the debug button. It'll run this spec only in debug mode.
A firefox window should then pop and show you something like this.

![Screenshot4](sc4.png?raw=true "Screenshot 4")

Just step in the fn.apply(this, arguments) and you should be inside the function you wanted to debug.

![Screenshot5](sc5.png?raw=true "Screenshot 5")

Note: For convenience you should probably use phantomjs for debugging (because the remote debugging is integrated inside the console application)

4 - Testing from the Cmd Test Web Console (Advanced)
----------------------------------------------------

In 2 & 3 we were running all  tests from your development box (which is probably a MacOS).
But you probably wonder how we can run our specs in Internet Explorer. 

I won't explain there how the Cmd Test is architected in details. But imagine there is 2 entities. 
* The test server: the box starting the test console (by default the test console command start a Test agent on the local machine)
* The test agent: the box running the tests (in our current example it will be the windows box)


$ sencha test console --noagent --callback-address=172.16.192.1 test/specs/data/


The callback address is the callback address used by the test agent (our windows box) to connect to the test server.

![Screenshot6](sc6.png?raw=true "Screenshot 6")

As you can see there is no "Test Agent" connected to the server and no browsers available.

Now on a Windows box, a virtual or a real machine it doesn't matter as long as it can ping the box initiating the test console, 
install sencha cmd and cmd-test (See Setup at the beginning of this document).

You need to configure Internet Explorer.
For debugging:
Tools -> Internet Options -> Advanced
Uncheck "Disable Script Debugging (Internet Explorer) and check "Disable Script Debugging (Other)".

![Screenshot7](sc7.png?raw=true "Screenshot 7")

To ensure that Compatibility View is Disabled over the intranet:
Tools -> Compatibility View Settings
Uncheck "Display intranet sites in Compatibility View"
Uncheck "Display all websites in Compatibility View"

![Screenshot8](sc8.png?raw=true "Screenshot 8")

You can finally run from the command prompt of the Window machine.

$ sencha test agent --server=http://172.16.192.1:1983

Then refresh the page of the console in your browser (you have to wait for the agent to be registered)
And you should see the testagent registered.

Where to report bugs, complain, throw ideas:

https://sencha.jira.com/browse/VQA and assign them to Nicolas Ferrero