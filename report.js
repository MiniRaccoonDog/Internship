$( ".submission" ).click(function() {
  $( "#level" ).slideToggle( "slow", function() {
  });
  $(".response").show();
});

 function systemCheck() {
    var system = document.forms[0];
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

$( ".reset" ).click(function() {
  $( "#level" ).slideToggle( "slow", function() {
    });
  function uncheckAll(){
    $("input[type='checkbox']:checked").prop("checked",false)
};
});

/*function showInput() {
        document.getElementById('display').innerHTML =
                    document.getElementById("user_input").value;
    }
    */
