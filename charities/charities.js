/*
created: Wed 9th November
Javascript to run the charities pages of Philadthropy
Authors: Arien Barley,
*/

//variable creation

//no of ads the user has watched this session
let sessionWatches = 0;


//end variabe creation

//functions

//ad an add function

//watch counter

//increment watch count

//when an add has been watched an event listener triggers this function
function incrementWatches(){
    // funciton which is triggered each time the user completes an ad watch or add click
    console.log('function runs');
    //updates frame of progress bar

    //+1 to add count for this charity in the file

    //update session count on page
    sessionWatches++;
    console.log(sessionWatches);
    $('#session-count').html(sessionWatches);

    //loads up a new add (possibly refreshes the i-frame)
};

function loadDoc() {
    console.log('loadDoc runs');
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("testwrite").innerHTML = this.responseText;
    }
    xhttp.open("GET", "data.txt", true);
    xhttp.send();
};



function playvideo(){
    f = $('#vid1');
    console.log('clickin iframe content?');
    console.log(f.contents());

}
function testTheData(){

}
//end functions
//button management
$('#session-count').html(sessionWatches);
$('#next-ad').click(incrementWatches);
$('#test').click(loadDoc);
$('#test-play-video').click(playvideo);

//gif management


/*dump
function getIframeContent(iframeEl){
    console.log(iframeEl);
    contents = iframeEl.contentWindow ?
            //if true
            iframeEl.contentWindow.document
            //if false
            : iframeEl.contentDocument;
    console.log(contents);
    return contents;
};




if ($('#vid1').contentWindow){
    console.log('contentWindow exists');
    $('#vid1').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}else if ($('#vid1').contentDocument){
    console.log('contentDocument exists');
    $('#vid1').contentDocument.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}else{
    console.log('neither exists')
}


console.log(document.getElementById("vid1").contentWindow)
document.getElementById("vid1").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
*/