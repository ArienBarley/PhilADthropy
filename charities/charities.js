/*
created: Wed 9th November
Javascript to run the charities pages of Philadthropy
Authors: Arien Barley,
*/

//variable creation

//no of ads the user has watched this session
let sessionWatches = 0;

let progressBarFrames = []

const numberOfProgressBarFrames = 5;

const videoIDs = ['HQxwMfqeurQ',
                  '808ryfU18CQ',
                  'odI7pQFyjso',
                  'AvXBN5A5Txc',
                   'HP6rYThJWUg'];

let noVideos = 1;
//end variabe creation

//functions

//increment watch count
function loadNextAd(){
    //refreshes Iframe(s) with the next video from the list of video IDs
    console.log('lna running')
    //generate url with next videoID the modulus causes the list to loop
    //rather than go off the end and cause an error
    url = 'https://www.youtube.com/embed/'+videoIDs[sessionWatches%videoIDs.length];

    //loop through the iframes
    for (var i = 1; i<=noVideos;i++){
        //update their URLs
        console.log(i);
        $('#vid'+i).attr('src',url);
    };
};

//when an add has been watched an event listener triggers this function
function incrementWatches(){
    // funciton which is triggered each time the user completes an ad watch or add click

    //+1 to add count for this charity in the file
    //update session count on page
    sessionWatches++;
    $('#session-count').html(sessionWatches);

    //updates frame of progress bar
    //if there are more frames avialiable
    if (sessionWatches < numberOfProgressBarFrames-1){
        //delete last frame
        $('#progress-bar img').remove();
        //epend next frame
        $('#progress-bar').append(progressBarFrames[sessionWatches]);
    }//otherwise leave the last frame in place

    //loads up a new add (possibly refreshes the i-frame)
    loadNextAd();
};

//ads another video to the watching div
function addAnAd(){
    //keep track of the number of videos on the page
    noVideos++;
    console.log(noVideos);
    //get the first video and clone it
    vidFrame = $("#frame1");
    newFrame = vidFrame.clone(false);
    //change the id so that we can pull them out s
    //eperately in the loadNextAd function
    newFrame.attr('id','frame'+ noVideos);
    newFrame.find('p iframe').attr('id','vid' + noVideos);
    //connect the new videoframe into the DOM
    $("#ad-watch-wrapper").append(newFrame);
};

$("#ad-an-add").click(function(){
  addAnAd();
});

//load progress par frames
function loadProgressBarFrames(){
    for (var i = 0; i<numberOfProgressBarFrames -1 ;i++){

        //create element ghost
        frame = document.createElement('img');
        frame.src = '../img/progressbarframes/frame'+i+'.jpg';

        //add it to the list
        progressBarFrames.push(frame);
    };
};

//function updateProgressBar()

function loadDoc(path, divID) {
    //gets the data as text from the passed path (relative to this file)
    //and writes it to the div with id = divID
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        $(divID).html = this.responseText;
    };
    xhttp.open("GET", path, true);
    xhttp.send();
};


//end functions

//load frames of the progress bar animation
window.onload = (event) => {
    loadProgressBarFrames();
};

//button management
$('#session-count').html(sessionWatches);
$('#next-ad').click(incrementWatches);
$('#test').click(function (){
    loadDoc("data.txt", "#testwrite");
});
