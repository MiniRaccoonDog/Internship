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
    });

  })
});
/*For Question ONE*/
function severityCheck() {
   var severity = document.forms[0].elements["severity"];
   var sevtxt = "";
   var a;
   for (a = 0; a < severity.length; a++) {
     if (severity[a].checked) {
       sevtxt = sevtxt + severity[a].value + " ";
     }
   }
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
  document.getElementById("naturetype").innerHTML = "The problem appears to be " + txt3 +". "+ txt32;
}
