function addAnAd(){
    // keep track of the number of videos on the page
    noVideos++;
    console.log("noVideos=",noVideos);

    // get the first video and clone it
    newFrame = $("#frame1").clone(false);

    // change the id so that we can pull them out
    // seperately in the loadNextAd function
    newFrame.attr('id','frame'+ noVideos);
    //srink frame nf.attr(widt )
    $('#ad-watch-wrapper').append(newFrame);
    //create a new player object in this iframe
    createPlayer('frame'+ noVideos, videoIds[sessionWatches%videoIds.length]);
    pressPlay(players[noVideos-1]);
    //change the videoframe properties so that they all fit on screen

    //TO BE DONE

    //connect the new videoframe into the DOM
    $("#ad-watch-wrapper").append(newFrame);
};
