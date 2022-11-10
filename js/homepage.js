/*
created: Wed 9th November
Javascript to run the homepage of Philadthropy
Authors: Arien Barley,
*/



//function to create/make visible the information about a specific charity once it is selected (button listener)
//function to turn the select a charity button to a link to that charity's page

//button management

var startWatchingButton =$("#start_wathching")

<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>$("#charity1_button").click(function() {
  $("#about_charity_div").html("<p> Info on that charity" + "</p>");
  $("#choose_charity_button").html(startWatchingButton);
});


$("#charity2_button").click(function() {
  $("#about_charity_div").append("<p> Info on that charity" + "</p>");
  $("#choose_charity_button").innerHTML = startWatchingButton;
});

$("#charity3_button").click(function() {
  $("#about_charity_div").append("<p> Info on that charity" + "</p>");
  $("#choose_charity_button").innerHTML = startWatchingButton;
});

$("#charity4_button").click(function() {
  $("#about_charity_div").append("<p> Info on that charity" " + "</p>");
  $("#choose_charity_button").innerHTML = startWatchingButton;
});
