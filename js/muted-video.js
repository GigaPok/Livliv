var video = document.getElementById('myVideo');
var volumeUp = document.getElementById('volumeUp')
var volumeMuted = document.getElementById('volumeMuted')


function toggleMute(){
  video.muted = !video.muted;

  if(video.muted){
    volumeUp.style.display = "none";
    volumeMuted.style.display = "flex";
  }else{
    volumeMuted.style.display = "none";
    volumeUp.style.display = "flex";
  }
}

