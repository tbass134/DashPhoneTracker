# DashPhoneTracker
A simple Dash app that makes a call to your phone when the phone is misplaced.

Uses the Nexmo API to make the call to the phone (http://www.nexmo.com)

Uses Node-Dash-Button to find the devices MAC address and run the Nexmo command when the device is tapped (https://github.com/hortinstein/node-dash-button)

# To Use

In order to run this, you will need to find your Dash's MAC address https://github.com/hortinstein/node-dash-button#find-a-dash
<br /><br />
1. Paste this MAC address to 'dash_mac_address' in Index.js<br />
2. create a account on Nexmo<br />
3. create a application on Nexmo using the /applications API (https://docs.nexmo.com/tools/application-api/api-reference#create)<br />
4. after the application is created, the payload returns the application_id, private_key.<br />
5. paste the application id to NEXMO_APPLICATION_ID in Index.js<br />
6. create a file called private.key and paste the private key into this file<br />
7. update 'path/to/private/key' in Index.js to point to this newly created file

