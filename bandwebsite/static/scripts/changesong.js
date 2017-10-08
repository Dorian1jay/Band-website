// changesong.js
// script was pieced together using various snippets online

document.addEventListener("DOMContentLoaded", function(event) { 
    
    addOnClickListeners();
});

function addOnClickListeners(){

    var strows = document.getElementById('songtable').rows;
    
		for (i=1; i< strows.length; i++){
    	
  		strows[i].addEventListener("click",function(event){
  			changeSong(event)
  		});
  		
  		
    }
}


function changeSong(event){
    
    // get current song in audio source element
    var current = document.getElementById('currentsong');

	// get selected table item and add track and name
	var selection =  event.target.children[0].innerHTML +"_"+ 
	event.target.children[1].innerHTML;
	
	// set the selection as the new source and reload the 
	// player
    current.src = "static/audio/" + selection;
    document.getElementById('audioplayer').load();
    

}
