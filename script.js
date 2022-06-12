	// function opennav() {
	// 	//more like a toggle function 
	// 	if (document.getElementById("listitems").style.display == "block"){
	// 		document.getElementById("listitems").style.display = "none"
	// 	}
	// 	else {
	// 		document.getElementById("listitems").style.display = "block"
	// 	}
	// }

	function opennav() {
		if ($(window).width() > 950){
		document.getElementById("listitems").classList.add("menu-open")
		try {
		document.getElementById("listitems").classList.remove("menu-close")
		}catch(ex){console.log(ex)}
		}

		else{
		document.getElementById("listitems").classList.add("menumobile-open")
		try {
		document.getElementById("listitems").classList.remove("menumobile-close")
		}catch(ex){console.log(ex)}
		}
	}
  
	function closenav() {
		if ($(window).width() > 950){
		document.getElementById("listitems").classList.add("menu-close")
		document.getElementById("listitems").classList.remove("menu-open")
		}
		else {
		document.getElementById("listitems").classList.add("menumobile-close")
		document.getElementById("listitems").classList.remove("menumobile-open")
		}
	}