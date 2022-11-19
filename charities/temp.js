
function addAnAd(){
  vidFrame = $("#frame1")
  newFrame = vidFrame.clone(false);
  $("#ad-watch-wrapper").append(newFrame);
}

$("#ad-an-add").click(function(){
  addAnAd();
});
