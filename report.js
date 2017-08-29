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
var machineOther="";
var natureOtherTicket="";
var txtwrds="";
var tablesumm="";
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
   document.getElementById("priority").innerHTML = "Severity level: " + sevtxt;
};
function fullSystemCheck() {
  resetSystemCheck();
  systemCheck();
}

/*Refresh Question TWO*/
function resetSystemCheck() {
    $("#rating").empty();
    $("#rating2").empty();
  }

/*For Question TWO*/
function systemCheck() {
  var systems = document.forms[0].elements["systems"];
  var txt2 = document.getElementById("systemsfix").value;
  var finaltxt="";
  var b;
  var b2;
  var sumtxt="";
  for (b = 0; b < systems.length; b++) {
    if (systems[b].checked) {
      var selector = $(systems[b]).attr("data-target");
      var subbies = $(selector).find(".subsystems");
      var txt = systems[b].value
      $("#rating").append("<h3>"+txt+"</h3><ul></ul>")
      finaltxt += "<h3>"+txt+"</h3><ul>";
      sumtxt += " |"+ txt +": ";
      console.log("first", sumtxt);
      for (b2 = 0; b2 < subbies.length; b2++) {
        if (subbies[b2].checked) {
          var subtxt = subbies[b2].value
          $("#rating").append("<li>"+subtxt+"</li>");
          finaltxt += "<li>"+subtxt+"</li>";
          sumtxt += subtxt + ", ";
          console.log("second", sumtxt)
        }
      }
      finaltxt += "</ul>"
    }
  }
  console.log("second", sumtxt);
  $("#rating2").append("Other: "+txt2);
  window.tablesumm = sumtxt;
  window.machineTicket = finaltxt;
  window.machineOther= txt2;
  console.log(finaltxt);
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
  document.getElementById("naturetype").innerHTML = "The problem appears to be " + txt3 + ". " + txt32;
  window.natureOtherTicket = txt32;
};


/*For Question FOUR*/
function textareaCheck() {
     window.txtwrds = document.getElementById("txtbox").value;
   document.getElementById("texttArea").innerHTML = "Additional Notes: " + txtwrds;
   var plz = document.getElementById("SECRETbox");
   var plz2 = document.getElementById("SECRETbox2");
   plz.value = "Additional Information: " + natureOtherTicket + ". " + machineOther + ". " + txtwrds;
   plz2.value = tablesumm;
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


/*Okay lets try some stuff */

function allTogether () {
  var emailEnder = "";
  var emailStart = "";
  var switchTWO = saveSeverity;
  var switchONE = saveNature;
  console.log(emailEnder);
  console.log(emailStart);
  console.log(switchTWO);
  console.log(switchONE);

  switch (switchTWO) {
      case "High":
        emailEnder = "@pagerduty.com"
        break;
      case "Medium":
        emailEnder = "@zendesk.com"
        break;
      case "Low":
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
  document.getElementById("ticketstatus").innerHTML = "Alert level: <strong>" + saveSeverity + "</strong>"
  document.getElementById("ticketinfo").innerHTML = machineTicket;
  document.getElementById("otherinfo").innerHTML = natureOtherTicket + "<br>" + machineOther + "<br>" + txtwrds;
}
