$(document).ready(function() {
  $("#form").submit(function(event) {
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);
    $("#letter").toggle();
    event.preventDefault();
  });
  $("#shout").submit(function(event) {
    var nameInput = $("input#loud").val();
    $(".loud").text(nameInput.toUpperCase());
    event.preventDefault();
  });
});
