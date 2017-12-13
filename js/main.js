var webview;
var webcontrol;

// EVENTS
$(document).ready(function() {
  webview = document.querySelector('webview');
  webcontrol = document.querySelector('#webcontrol');
  webview.addEventListener('did-finish-load', eventLoadFinish);
  doReize();
});

$(window).resize(function(){
  doReize()
});

$("#textUrl").keyup(function(event){
  if(event.keyCode == 13){
    webview.src=$("#textUrl").val();
  }
});


// EVENTS
function eventLoadFinish() {
  var url = webview.src;
  if(url.includes("https://"))
  {
    $("#urlIcon").html('<i class="glyphicon glyphicon-lock"></i>');
    $("#urlIcon").closest(".input-group").removeClass("has-error");
    $("#urlIcon").closest(".input-group").addClass("has-success");
  }
  else {
    $("#urlIcon").html('<i class="glyphicon glyphicon-remove"></i>');
    $("#urlIcon").closest(".input-group").removeClass("has-success");
    $("#urlIcon").closest(".input-group").addClass("has-error");
  }
  $("#textUrl").val(url);
}


// DO FUNCTIONS
function doReize() {
  let h = window.innerHeight  - $('#toolbar').height() - 10;
  webcontrol.style.height = h + 'px'
}
