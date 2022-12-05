/*
created: Wed 9th November
Javascript to run the charities pages of Philadthropy
Authors: Arien Barley,
*/

//variable creation

//no of ads the user has watched this session
let sessionWatches = 0;

const numberOfProgressBarFrames = 5;


allVidIds = { 1: ['IVkoap_1y34',
                  '6htAvhsoek0',
                  'sRwEYQKmsts',
                  'c7V695Cllgw',
                   'aayj_Oxqqzo',
               ],
           2: ['72RUWt0cLG8',
                'Bk23mL15qpA',
                'zFUb5l7aO2w',
                'pikvDbl31sU',
                'zy2kR1zFwjQ',],

            3: ['gplXgq4vI2M',
                 'KG3O6UBLGbA',
                 '5J4KTfYs5xs',
                 'iQABUiA5fzU',
                 '6goNpMIsiyU',],

            4:  ['6Qpl-3eR6eE',
                 'a8i7suRwjyA',
                 'PDISv0bLWPs',
                 'K2IK9uOt5ks',
                 'fFN-v_aT-y8',],
       }

var videoIds = [];

var players = [];
let noVideos = 1;

var progressBarFrames = [];

function loadNextAd(){
    //refreshes Iframe(s) with the next video from the list of video IDs
    console.log('lna running');
    //rather than go off the end of the list and cause an error
    for (var i = 0; i<players.length;i++){
        players[i].loadVideoById({'videoId':videoIds[sessionWatches%videoIds.length]});
    };

};
function ceckVidsPlayed(){
    //return true;
    for(var i = 0; i<players.length; i++){
        var p = players[i];
        p.getPlayerState();
        //if any video isnt eiter finised or played for 30sectons
        if ((p.getPlayerState() != 0)){
            if (p.getCurrentTime()<30){
                //dont allow next ad to be loaded
                return false;
            }
        }
    }
    //if loop terminates teyve all finised playing
    return true;
}
//when an add has been watched an event listener triggers this function
function incrementWatches(){
    // funciton which is triggered each time the user completes a watch

    //ceck if video as played enoug to count as a view
    if (ceckVidsPlayed()){
        //update session count on page
        sessionWatches++;
        $('#session-count').html(sessionWatches);
        //updates frame of progress bar
        $('#progress-bar').html('');
        $('#progress-bar').append(progressBarFrames[Math.min(sessionWatches,progressBarFrames.length-1)]);

        console.log("current frame", progressBarFrames[Math.min(sessionWatches,progressBarFrames.length-1)]);
        console.log("min:",Math.min(sessionWatches,progressBarFrames.length-1));
        console.log(sessionWatches);
        console.log(progressBarFrames);


        //loads up a new add (possibly refreshes the i-frame)
        loadNextAd();
        //clear messages
        $(".message").remove();
    }else{
        $('#ad-watch-counter').append("<p class = 'message'>Play at least 30s before loading the next ad!<br> (otherwise the video does not recieve views)</p>")
    }
};


//ads another video to the watching div



function pressPlay(player){
    player.mute();
    player.playVideo();
};

function createPlayer(frameID, vidID){
    player = new YT.Player(frameID, {
        height: '390',
        width: '640',
        videoId: vidID,
        playerVars: {
            'playsinline': 1,
        },
        events: {
            'onReady': function(event){pressPlay(event.target)},
        },
    });
    players.push(player);
};
//end functions




//--- setup ---
//sets up the first video
function onYouTubeIframeAPIReady(){
    console.log(videoIds)
    createPlayer('frame1',videoIds[0]);
};

// load progress par frames
function loadProgressBarFrames(){
    // loops through frame images creating elements and saving them to
    // progressBarFrames, but not appending them sothat they are not
    // displayed yet
    for (var i = 0; i<numberOfProgressBarFrames ;i++){
        //create element ghost
        frame = document.createElement('img');
        frame.src = '../img/progressbarframes/'+(i+1)+'.png';
        progressBarFrames.push(frame);
    }
    console.log(progressBarFrames);
}
//gif management

//run setup scripts
window.onload = (event) => {
    //load the first video up
    //loadNextAd();
    //load all the animation frames for the progress bar.
    loadProgressBarFrames();
    console.log()
    videoIds  = allVidIds[parseInt($('#charity-num').text())];
    console.log("in onload",videoIds)
    //load youtube API
    var tag = document.createElement('script');


    //load youtube's library for interacting with its api asynchronosly
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

//button management
$('#session-count').html(sessionWatches);
$('#next-ad').click(incrementWatches);
$("#ad-an-add").click(function(){
    console.log('adanad cicked');
    addAnAd();
});
$("#play-all").click(pressPlay);




/*dump
//wait until the video has been playing for 30 seconds before allowinng the user
//to load the next video, so that the view is actually counted
$(".video-frame").click(function(){
    $("#next-ad").attr('disabled',true);
    console.log('vidframeclicked');
    setTimeout(function(){
        $("#next-ad").attr('disabled',false);

    },2000);
});
$(".video-frame").click(function(){
    $("#next-ad").attr('disabled',true);
    console.log('vidframeclicked');
    setTimeout(function(){
        $("#next-ad").attr('disabled',false);

    },2000);
});


//not in use
function addClickTimer(id){
    $(id).contents().on("mousedown, mouseup, click",function(){
        console.log("vid clicked");
        setTimeout(function(){
            $("#next-ad").attr('disabled',false);
            $("#next-ad").html('Next Ad');
        },2000)
    });
};

$('#test').click(function (){
    loadDoc("data.txt", "#testwrite");
});

function clickVideos(){
    var distIn = 10;
    //loop through iframes

    for (var i = 1; i<=noVideos;i++){
        el =$('#vid1').get(0);
        console.log(el);
        // get some coords inside them
        topleft = getOffset(el);
        x = topleft[0] +distIn
        y = topleft[1] +distIn
        console.log(topleft);
        clickAt(x,y);
    };
};
//click the video hack?


var simulateMouseEvent = function(element, eventName, coordX, coordY) {
  element.dispatchEvent(new MouseEvent(eventName, {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: coordX,
    clientY: coordY,
    button: 0
  }));
};


function simulateClick(x, y) {
    console.log("clickAt:",x,y);
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null);
    console.log(clickEvent);
    console.log(document.elementFromPoint(x, y));
    document.elementFromPoint(x, y).dispatchEvent(clickEvent);
};
function clickVideos(){
    el =$('#vid1').get(0);
    console.log(el);
    // get some coords inside them
    position = getOffset(el);
    x = position[0] +1.34211;
    y = position[1]-2.1238;
    console.log(position);
    simulateClick(x,y);

    simulateMouseEvent (el, "mousedown", x, y);
    simulateMouseEvent (el, "mouseup", x, y);
    simulateMouseEvent (el, "click", x, y);

};

$('#play-videos').click(clickVideos);

function clickAt(x, y){
    //adapted from user2067021 on stack overflow
    //create click event
    var ev = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y
    });
    //dispatch click to element
    var el = document.elementFromPoint(x, y);
    el.dispatchEvent(ev);
};


function getOffset(el) {
    var box = el.getBoundingClientRect()
    x = box.left + (box.right - box.left) / 2,
    y = box.top + (box.bottom - box.top) / 2;
    return [x,y]
};
$('#play-videos').click(clickVideos);
*/
