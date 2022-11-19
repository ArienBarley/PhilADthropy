/*
created: Wed 9th November
Javascript to run the homepage of Philadthropy
Authors: Arien Barley,
*/



//function to create/make visible the information about a specific charity once it is selected (button listener)
//function to turn the select a charity button to a link to that charity's page

//variable definitions
var charityNames = ['Charity 1','Charity 2','Charity 3','Charity 4',];

var charityInfos = ['about charity 1: blah blah blah blah blah blah blah blah ',
                    'about charity 2: blah blah blah blah blah blah blah blah ',
                    'about charity 3: blah blah blah blah blah blah blah blah ',
                    'about charity 4: blah blah blah blah blah blah blah blah ',];

//links to each charities page
var links = ['charities/index.html','charities/index.html',
             'charities/index.html','charities/index.html',];

//funcitons
function charitySelected(charityNo){
    watchButton = $('#choose_charity_button')
    $("#about_charity_div").html('<h2>'+charityNames[charityNo]+"</h2> <p>"+charityInfos[charityNo]+"</p>");
    $("#about_charity_div").css('border', '2mm ridge rgba(255, 255, 255, .6)');
    watchButton.css({color: 'red', 'font-weight': 'bold'});
    //watchButton.css({'font-weight', 'bold'});
    watchButton.html("Start Watching");
    watchButton.prop('disabled', false);
    //update choose charity link
    watchButton.click(function(){
        window.open(links[charityNo])
    })
    console.log(charityNo);
    console.log(charityNames)
};
//button management
$("#charity1_button").click(function(){
    charitySelected(0);
});
$("#charity2_button").click(function(){
    charitySelected(1);
});
$("#charity3_button").click(function(){
    charitySelected(2);
});
$("#charity4_button").click(function(){
    charitySelected(3);
});


/*
$("#charity2_button").click(function() {
  $("#about_charity_div").html("<p> Info on that charity2" + "</p>");
  $("#choose_charity_button").css({color: 'red'});
  $("#choose_charity_button").html("Start Watching");
  $("#choose_charity_button").prop('disabled', false);
  //update choose charity link
  link = 'charities/index.html';
});

$("#charity3_button").click(function() {
  $("#about_charity_div").html("<p> Info on that charity3" + "</p>");
  $("#choose_charity_button").css({color: 'red'});
  $("#choose_charity_button").html("Start Watching");
  $("#choose_charity_button").prop('disabled', false);
  //update choose charity link
  link = 'charities/index.html';

});

$("#charity4_button").click(function() {
  $("#about_charity_div").html("<p> Info on that charity4" + "</p>");
  $("#choose_charity_button").css({color: 'red'});
  $("#choose_charity_button").html("Start Watching");
  $("#choose_charity_button").prop('disabled', false);
  //update choose charity link
  link = 'charities/index.html';
});

$("#choose_charity_button").click(function() {
    $('#center_button').html('<a href ="'+link+'"><button id="choose_charity_button" disabled>Choose Charity</button>');
});
*/
