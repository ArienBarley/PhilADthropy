/*
created: Wed 9th November
Javascript to run the homepage of Philadthropy
Authors: Arien Barley,
*/



//function to create/make visible the information about a specific charity once it is selected (button listener)
//function to turn the select a charity button to a link to that charity's page

//button management
$("#charity1_button").click(function() {
  $("#about_charity_div").html("<p> Info on that charity1" + "</p>");
  $("#choose_charity_button").css({color: 'red'});
  $("#choose_charity_button").html("Start Watching");
  $("#choose_charity_button").prop('disabled', false)
});

$("#charity2_button").click(function() {
  $("#about_charity_div").html("<p> Info on that charity2" + "</p>");
  $("#choose_charity_button").css({color: 'red'});
  $("#choose_charity_button").html("Start Watching");
  $("#choose_charity_button").prop('disabled', false)
});

$("#charity3_button").click(function() {
  $("#about_charity_div").html("<p> Info on that charity3" + "</p>");
  $("#choose_charity_button").css({color: 'red'});
  $("#choose_charity_button").html("Start Watching");
  $("#choose_charity_button").prop('disabled', false)

});

$("#charity4_button").click(function() {
  $("#about_charity_div").html("<p> Info on that charity4" + "</p>");
  $("#choose_charity_button").css({color: 'red'});
  $("#choose_charity_button").html("Start Watching");
  $("#choose_charity_button").prop('disabled', false)
});

$("#choose_charity_button").click(function() {

});
