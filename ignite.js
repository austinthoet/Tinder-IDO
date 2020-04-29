/**
** A script to automate the messaging process on tinder to save some time and land some dimes
**
** Written by athoet
**/



/**
** Calculate total matches and iterate through the links corresponding with these matches
**/
function igniteTheFlame(){ 
	var containsMatches = document.getElementById("matchListNoMessages");
	var matchesMessaged = 0;
	var base = "https://tinder.com/";

	var arr = [], l = document.links;
	for(var i=0; i < l.length; i++) {
  		arr.push(l[i].href);
	}

    for(var i=0; i < l.length; i++){
  	 	var hrefText = l[i].toString();
    	if(hrefText.indexOf("/app/messages/") != -1 && hrefText.indexOf("profile") == -1){
    		l[i].click(); //click on a match
    		firePickupLine(); 
    		matchesMessaged++;
    	}
    	if(matchesMessaged >= 100) { //if you break this you are an absolute beast && run it back
    		break;
    	}
    	var buttons = document.getElementsByTagName("button");
    	buttons[1].click();
	}
}


/**
** Writes a pickup line from dictionary and sends the message
**/
function firePickupLine() {
    var dictionary = ['If COVID19 doesnt take you out soon, can I?', 'Can not spell quarantine without u r a q t.', 'Wanna play corona and get spread on every hard surface?', 'Is that hand sanitizer in your pocket or are you just happy to be within 6 feet of me?', 'Since all the public libraries are closed, I am checking you out instead.', 'Baby, do you need toilet paper? Because I can be your Prince Charmin', 'Without you my life is as empty as the supermarket shelf.', 'Hey babe can I ship you dinner and a movie?', 'Yo girl are you a global pandemic because you got me feeling sick...', 'Damn girl are you COVID positive cause you chokin me up.', 'How you doin?', 'If COVID19 doesnt take you out soon, can I?']; ////create dictionary of pickup lines
    var randomNumber = Math.floor(Math.random() * dictionary.length); 

    var message = dictionary[randomNumber]; //writes a randomly chosen pickup line
    document.getElementById("chat-text-area").focus();
    document.getElementById("chat-text-area").select();
    document.execCommand('insertText', false, message);

    var buttons = document.getElementsByTagName("button");
    buttons[9].setAttribute('id', "chatTextAreaSubmit");
    document.getElementById("chatTextAreaSubmit").disabled = false;
  	document.getElementById("chatTextAreaSubmit").click();
    pause(600);
}

/**
** Prevents asynchronous execution 
**/
function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Netflix and Chilling */ }
}

/**
** Let's get some matches
**/
(function letsGetSomeMatches() {
		igniteTheFlame();
}());
