$( document ).ready(function() {
  $( ".collapse" ).click(function() {
    var target = $(this).attr("href");
    $(target).slideToggle("fast", function(){
      $(".response").show();
    });
  });
  $( ".reset" ).click(function() {
    var target = $(this).attr("href");
    $( target ).slideToggle( "slow", function() {
    })
  })
});
/*Establish Globals????*/
var saveSeverity="";
var saveNature="";
var machineTicket="";
var natureOtherTicket="";
/*For Question ONE*/
function severityCheck() {
   var severity = document.forms[0].elements["severity"];
   var sevtxt = "";
   var a;
   for (a = 0; a < severity.length; a++) {
     if (severity[a].checked) {
       sevtxt = sevtxt + severity[a].value;
     }
   };
   window.saveSeverity = sevtxt;
   document.getElementById("priority").innerHTML = "Severity is: " + sevtxt;
}
/*For Question TWO*/
function systemCheck() {
  var system = document.forms[0].elements["systems"];
  var txt = "";
  var txt2 = document.getElementById("systemfix").value;
  var i;
  for (i = 0; i < system.length; i++) {
    if (system[i].checked) {
      txt = txt + system[i].value + ", ";
    }
  }
  document.getElementById("rating").innerHTML = "Machines affected are: " + txt + txt2;
  window.machineTicket = txt + txt2+". ";
}
/*For Question THREE*/
function natureCheck() {
  var nature = document.forms[0].elements["nature"];
  var txt3 = "";
  var txt32 = document.getElementById("freenature").value;
  var c;
  for (c = 0; c < nature.length; c++) {
    if (nature[c].checked) {
      txt3 = txt3 + nature[c].value;
    }
  }
  console.log(txt3);
  window.saveNature = txt3;
  document.getElementById("naturetype").innerHTML = "The problem appears to be " + txt3 +". "+ txt32;
  window.natureOtherTicket = txt32+". ";
};
/*Okay lets try some bullshit */

function allTogether () {
  var emailEnder = "";
  var emailStart = "";
  var switchTWO = saveSeverity;
  var switchONE = saveNature;
  switch (switchTWO) {
      case "high":
        emailEnder = "@pagerduty.com"
        break;
      case "medium":
        emailEnder = "@zendesk.com"
        break;
      case "low":
        emailEnder = "@spoonflower.com"
        break;
      default:
        console.log("Invalid response!");
    };
  switch (switchONE) {
      case "software or files":
        emailStart = "sysops" + emailEnder
        break;
      case "mechanical or physical":
        emailStart = "maintenance"+ emailEnder
        break;
      case "admin or website":
        emailStart = "plumbing"+ emailEnder
        break;
      default:
        console.log("Invalid response!");
    };
  document.getElementById("finalScore").innerHTML = "Contact: "+ emailStart;
  document.getElementById("ticketinfo").innerHTML = "Ticket is of " + saveSeverity + " importance, impacting the " + machineTicket
  document.getElementById("otherinfo").innerHTML =  "Notes: " + natureOtherTicket
}
