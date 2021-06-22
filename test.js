let theAudio = document.getElementById("theAudio")

theAudio.addEventListener('timeupdate', function() {
	if(theAudio.currentTime > 60.0){
	theAudio.pause()
	}
})

document.body.onclick = function(){
	theAudio.play();
}