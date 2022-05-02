const body = document.querySelector("body"),
	  sidebar = body.querySelector(".sidebar"),
	  toggle = body.querySelector(".toggle"),
	  modeSwitch = body.querySelector(".toggle-switch"),
	  modeText = body.querySelector(".mode-text");
	  home = body.querySelector(".home");
	  closeBtn = body.querySelector(".close-btn");
	  msgAlerta = body.querySelector(".msg-alertas");

	  closeBtn.addEventListener("click", () => {
	  	msgAlerta.classList.toggle("remove")
	  	window.localStorage.setItem("remove", "ok");
	  	document.getElementById("msg");
        msg.parentNode.removeChild(msg);
	  })

	  toggle.addEventListener("click", () => {
	  	sidebar.classList.toggle("close");

	  	if (sidebar.classList.contains("close")) {
	  	home.classList.toggle("hide")
	  	home.classList.toggle("show")
	  }
	  else {
	  	home.classList.toggle("show")
	  	home.classList.toggle("hide")
	  }
	  });

	  modeSwitch.addEventListener("click", () => {
	  	body.classList.toggle("dark");

	  	if (body.classList.contains("dark")) {
	  		modeText.innerText = "Light Mode"
	  		window.localStorage.setItem("theme", "dark");
	  	}
	  	else {
	  		modeText.innerText = "Dark Mode"
	  		window.localStorage.setItem("theme", "light");
	  	}
	  });

	  const theme = localStorage.getItem('theme');
	  const remove = localStorage.getItem('remove');
	  if ( theme == "dark") {
	  	body.classList.toggle("dark");
	  }
	  else {
	  	body.classList.remove("dark")
	  }

	  if ( remove == "ok" ) {
	  	document.getElementById("msg");
        msg.parentNode.removeChild(msg);
	  }

	  function mouseEmCima(imagem) {
	  	imagem.src="./imgs/Logo.png";
	  }
	   
	  function mouseFora(imagem) {
		imagem.src="./imgs/Foto.jpg";
	  }