var dash_mac_address = "MAC_ADDRESS"
var nexmo_phone_number = "NEXMO_PHONE_NUMBER"
var number_to_dial = "YOUR_PHONE_NUMBER"

var Nexmo = require('nexmo');
var dash_button = require('node-dash-button');

var options = {
	debug: true
}

var nexmo = new Nexmo({
    apiKey: "NEXMO_API_KEY",
    apiSecret: "NEXMO_API_SECRET",
    applicationId: "NEXMO_APPLICATION_ID",
    privateKey: "path/to/private/key",
  });

var dash = dash_button(dash_mac_address, null, null, 'all'); //address from step above
dash.on("detected", function (){

	nexmo.calls.create({
	  to: [{
	    type: 'phone',
	    number: number_to_dial
	  }
	  ],
	  from: {
	    type: 'phone',
	    number: nexmo_phone_number
	  },
	  answer_url: ['http://www.example.com']
	}, function() {
		console.log("sent");
	});


    console.log("omg found");
});