	// Menu
		var roundButton = document.querySelector("#roundButton")
		var Slidenav = document.querySelector("#Slidenav")
		
			roundButton.addEventListener("click", showMenu, false)
			Slidenav.addEventListener("click", hideMenu, false)
			
			function showMenu(e){
				Slidenav.classList.add("show")
				document.body.style.overflow = "hidden"
			}
			function hideMenu(e){
				Slidenav.classList.remove("show")
				e.stopPropagation();
				document.body.style.overflow = "auto"
			}

	// Go back in history link
	function goBack() {
    	window.history.back();
	}