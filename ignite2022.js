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
  document.execCommand('insertText', false, "Damn girl are you COVID positive cause you chokin me up.");

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
    while(end){
      var end = igniteTheFlame();
    }
}());
