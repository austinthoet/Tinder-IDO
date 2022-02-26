/*
This program automates the messaging of all your tinder matches. @athoet
*/


/*
Main contoller of profile navigation
*/
function igniteTheFlame(){

    while(true){
      var profileLinks = getProfiles();
      if(typeof profileLinks[0] === 'undefined'){
        return false;
      } else {
        for(j=2;j<profileLinks.length;j++){
          var tempMatch = profileLinks[j].replace("https://tinder.com","");
          var tempAddress = "a[href='"+ tempMatch +"']";
          var match = document.querySelector(tempAddress);
          match.click();
          fireLine();
        }
      }
      pause();
    }
/*
Returns profile links to all available matches
*/
function getProfiles(){
  var roughLinks = [].slice.call(document.querySelectorAll(".matchListItem, a[href='/app/messages/']"));
  var messageLinks = [];
  if(roughLinks.length < 50){
    return [];
  }
  for(i=0;i<roughLinks.length;i++){
    if(typeof roughLinks[i].href === 'undefined'){
    } else {
        messageLinks[i] = roughLinks[i].href;
    }
  }
  return messageLinks;
}
/*
Automates the writing and sending of messages
*/
function fireLine(){
   /** 
    var dictionary = ['If COVID19 doesnt take you out soon, can I?', 'Can not spell quarantine without u r a q t.', 'Wanna play corona and get spread on every hard surface?', 'Is that hand sanitizer in your pocket or are you just happy to be within 6 feet of me?', 'Since all the public libraries are closed, I am checking you out instead.', 'Baby, do you need toilet paper? Because I can be your Prince Charmin', 'Yo girl are you a global pandemic because you got me feeling sick...', 'Damn girl are you COVID positive cause you chokin me up.', 'How you doin?', 'If COVID19 doesnt take you out soon, can I?']; //create dictionary of pickup lines
    var randomNumber = Math.floor(Math.random() * dictionary.length); 
    var message = dictionary[randomNumber]; //writes a randomly chosen pickup line
    **/

  document.execCommand('insertText', false, "Damn girl are you COVID positive cause you chokin me up."); //change message here
  var buttons = document.getElementsByTagName("button");
  buttons[11].setAttribute('id', "chatTextAreaSubmit");
  document.getElementById("chatTextAreaSubmit").disabled = false;
  document.getElementById("chatTextAreaSubmit").click();
  console.log("Match messaged.");
}

/**
** Prevents asynchronous execution
**/
function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Netflix and Chilling */ }
}

(function watchItBurn() {
    end = true;
    while(end){
      var end = igniteTheFlame();
    }
}());
