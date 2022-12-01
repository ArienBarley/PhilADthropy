/*
created: Wed 9th November
Javascript to run the homepage of Philadthropy
Authors: Arien Barley,
*/



//function to create/make visible the information about a specific charity once it is selected (button listener)
//function to turn the select a charity button to a link to that charity's page

//variable definitions
var charityNames = ['National Parks Conservation Association','Fight the New Drug','Best Friends Animal Society','Mental Health America',];

var charityInfos = ['The National Park Conservation Association mission is to protect and preserve the national parks for the present and future generations. They inform and inspire the public and influence decision-makers to ensure that the favorite places of America are being protected. ',
                    'Fight the New Drug is a non-religious, non-legislative, nonprofit organization that informs decisions regarding pornography by raising awareness of its harmful effects using only science, facts, and personal accounts. ',
                    'The Best Friends goal is to achieve no-kill across the entire country. They believe that animals are our best friends and that every pet has its own story, each one worth saving and each life is important. They have rescue groups and lifesaving shelters across the U.S. ',
                    'Mental Health America is a community-based non-profit that addresses mental illness and promotes overall mental health for all with recovery as the goal. This organization provides education, research, advocacy, and service for mental health. ',];

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
