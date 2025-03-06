const allSideMenu = document.querySelectorAll('#sidebar .side-menu li a')
allSideMenu.forEach(item=>{
    const li = item.parentElement;

    item.addEventListener('click', function(){
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active')
        });
        li.classList.add('active'); 
    });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('.bx-menu');
const sidebar = document.getElementById('sidebar');
const content= document.getElementById('content');

menuBar.addEventListener('click', function () {
	if (sidebar.style.display === "none") {
		sidebar.style.display = "block";
		content.style.width = "calc(100% - 280px)";
		content.style.left = "280px";
	} else {
		sidebar.style.display = "none";
		content.style.width = "calc(100% - 0px)";
		content.style.left = "0";
	}
});

/* menuBar.addEventListener('click', function(){
	function sidebarAnimate () {
		let position = 0;
		if (position < 280) {
			position += 280;
			if (sidebar.style.display === "none") {
				sidebar.style.display = "block";
				content.style.width = `calc(100% - ${position}px)`;
				content.style.left = `${position}px`;
			} else {
				sidebar.style.display = "none";
				content.style.width = "calc(100% - 0px)";
				content.style.left = "0";
			}
		}
	}
	requestAnimationFrame(sidebarAnimate());
}); */

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
});

window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
});


const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const passwordInput = document.getElementById("password");
	const togglePassword = document.getElementById("togglePassword");
  
	togglePassword.addEventListener("click", function () {
	  if (passwordInput.type === "password") {
		passwordInput.type = "text";
		togglePassword.classList.remove("bx-hide");
		togglePassword.classList.add("bx-show");
	  } else {
		passwordInput.type = "password";
		togglePassword.classList.remove("bx-show");
		togglePassword.classList.add("bx-hide");
	  }
	});
  });
  