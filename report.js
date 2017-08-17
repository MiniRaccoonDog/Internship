$( document ).ready(function() {
  $( ".collapse" ).click(function() {
    var nextStep = $(this).parent().parent().next(".step");
    var target = $(this).attr("data-target");
    $(target).slideToggle("fast", function(){
      $(".response").show();
    })
    $(nextStep).addClass("active");
  });
  $( ".reset" ).click(function() {
    var target = $(this).attr("data-target");
    $( target ).slideToggle( "slow", function() {
    })
  })
});

/*Establish Globals????*/
var saveSeverity="";
var saveNature="";
var machineTicket="";
var natureOtherTicket="";
var txtwrds="";
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
  var systems = document.forms[0].elements["systems"];
  var txt = "";
  var txt2 = document.getElementById("systemsfix").value;
  var b;
  for (b = 0; b < systems.length; b++) {
    if (systems[b].checked) {
      txt = txt + systems[b].value + ", ";
    }
  }
  document.getElementById("rating").innerHTML = "Machines affected are: " + txt + txt2 + ". ";
  window.machineTicket = txt + txt2;
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
  window.saveNature = txt3;
  document.getElementById("naturetype").innerHTML = "The problem appears to be " + txt3 +". "+ txt32 + ". ";
  window.natureOtherTicket = txt32;
};

/*BOX SELECTION*/
$()


/*For Question FOUR*/
function textareaCheck() {
     window.txtwrds = document.getElementById("txtbox").value;
   document.getElementById("texttArea").innerHTML = "Additional Notes: " + txtwrds;
};

/*subQuestion Expander*/
$( document ).ready(function() {
  $(".Q3").change(function () {
    var subs = $(this).attr("data-target");
    if ($(subs).hasClass("active")) {
      $(subs).removeClass("active")
    } else {
      $(subs).addClass("active");
    }
  })
})


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
  document.getElementById("finalScore").innerHTML = " "+ emailStart;
  document.getElementById("ticketinfo").innerHTML = "Importance level is " + saveSeverity + ", impacting the " + machineTicket + ". ";
  document.getElementById("otherinfo").innerHTML = natureOtherTicket + txtwrds;
}
