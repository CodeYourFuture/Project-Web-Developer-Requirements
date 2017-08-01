window.onload = function() {
	let showHideNews = document.querySelector('.hide-show-news');
	let newsContent = document.querySelector('.news-content');	
	let form = document.querySelector('.form');

	coloseMenu();

	showHideNews.addEventListener('click', e => {
		e.preventDefault();
		newsContent.classList.toggle('hide-element');
		if (showHideNews.textContent === '<< Hide news item') {
			showHideNews.textContent = '>> Show news item'
		} else {
			showHideNews.textContent = '<< Hide news item';
		}
	})

	form.addEventListener('submit', e => {
		e.preventDefault();

		let name = document.getElementById('name');
		let email = document.getElementById('email');
		let phone = document.getElementById('phone');
		let validName = isValidName(name.value);
		let validEmail = isValidEmail(email.value);
		let validPhone = isValidPhone(phone.value);
		
		if (!validName) {
			name.nextSibling.textContent = 'The name you entered is either too short or invalid. The name should be at least three letters long and may contain English alphabit and spaces.';

			// name.addEventListener('change', e => {
			// 	if (isValidName(name.value)) {
			// 		name.nextSibling.textContent = '';
			// 	}
			// });
		}

		if (!validEmail) {
			email.nextSibling.textContent = 'The email you entered is invalid.';

			// email.addEventListener('change', e => {
			// 	if (isValidEmail(email.value)) {
			// 		email.nextSibling.textContent = '';
			// 	}
			// });
		}

		if (!validPhone) {
			phone.nextSibling.textContent = 'The phone number you entered is invalid.';

			// phone.addEventListener('change', e => {
			// 	if (isValidPhone(phone.value)) {
			// 		phone.nextSibling.textContent = '';
			// 	}
			// });
		}

		if (!validName || !validEmail || !validPhone) {
			form.addEventListener('keyup', e => {
				if (isValidName(name.value)) {
			 		name.nextSibling.textContent = '';
			 	}

				if (isValidEmail(email.value)) {
					email.nextSibling.textContent = '';
				}

				if (isValidPhone(phone.value)) {
					phone.nextSibling.textContent = '';
				}
			});
		}

		if (validName && validEmail && validPhone){
			//send AJAX 
			form.classList.add('hide-element');
		}
	});



}

window.onresize = coloseMenu;

function coloseMenu (){
	let nav = document.querySelector('.navbar');
	let icon = document.querySelector('.nav-icon');

	if (window.innerWidth <= 600) {
		nav.className += ' closed';
		icon.addEventListener('click', e => {
			if (nav.className === 'navbar') {
				nav.className += ' closed';
			} else {
				nav.className = 'navbar';
			}
		})
	}
}

function isValidName(name){
	let checkName = /^[a-zA-Z\s]{3,}$/ig.test(name);
	if (checkName) return true;
}


function isValidEmail(email) {
	let re = /^[A-Z0-9._+%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi;
	return re.test(email);
}

function isValidPhone(phone){
	return /^[\d\s+()]{0,}$/g.test(phone);
}





