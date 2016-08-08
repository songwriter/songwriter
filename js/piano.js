var press = document.getElementById('keys').getElementsByTagName("div");       //getElementsByTagName  notise the "s" of elements
for(var i = 0; i < press.length; i++) {             //set sound for the keys
	press[i].addEventListener('click', function(){                   //notise  the spell of listen
		var audioObj = new Audio('sound/' + this.id + '.ogg');     //creat an Audio object
		audioObj.play();	
	},false);
}