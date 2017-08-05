window.onload = function() {
	let newsUrl = 'https://cyf-api.herokuapp.com/news';
	startColoseMenu();

	showHideNews();

	startFormMonitor();

	fetchNews(newsUrl);


}

function startColoseMenu (){
	let nav = document.querySelector('.navbar');
	let icon = document.querySelector('.nav-icon');
	let timerID;

	icon.addEventListener('click', e => {
		if (nav.className === 'navbar') {
			nav.className += ' closed';
		} else {
			nav.className = 'navbar';
		}
	});

	nav.addEventListener('mouseleave', e => {
		if (window.innerWidth < 600) {
			timerID = setTimeout(() => {
				if (nav.className === 'navbar') {
					nav.className += ' closed';
				}
			}, 500);
		}
	});

	nav.addEventListener('mouseenter', e => {
		if (window.innerWidth < 600) {
			clearTimeout(timerID);
		}
	});

	if (window.innerWidth >= 600) return;
	nav.className += ' closed';
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

function fetchNews(url){
	fetch(url, {
		method: 'GET',
		headers: {"Content-Type": "application/json"}
	}).then(res => {
		res.json().then( data => {
			populateNews(data);
		});
	}).catch(error => console.log(error));


}

function showHideNews(){
	let showHideNewsLink = document.querySelector('.hide-show-news');
	let newsContent = document.querySelector('.news-content');	

	showHideNewsLink.addEventListener('click', e => {
		e.preventDefault();
		newsContent.classList.toggle('hide-element');
		if (showHideNewsLink.textContent === '<< Hide news item') {
			showHideNewsLink.textContent = '>> Show news item'
		} else {
			showHideNewsLink.textContent = '<< Hide news item';
		}
	})
}

function startFormMonitor() {
	let form = document.querySelector('.form');

	form.addEventListener('submit', e => {
		e.preventDefault();

		let name = document.getElementById('name').value;
		let email = document.getElementById('email').value;
		let phone = document.getElementById('phone').value;
		let message = document.getElementById('message').value;
		let nameWarning = document.getElementById('name-worning');
		let emailWarning = document.getElementById('email-worning');
		let phoneWarning = document.getElementById('phone-worning');
		let validName = isValidName(name);
		let validEmail = isValidEmail(email);
		let validPhone = isValidPhone(phone);
		
		if (!validName) {
			nameWarning.textContent = 'The name you entered is either too short or invalid. The name should be at least three letters long and may contain English alphabit and spaces.';
		}

		if (!validEmail) {
			emailWarning.textContent = 'The email you entered is invalid.';
		}

		if (!validPhone) {
			phoneWarning.textContent = 'The phone number you entered is invalid.';
		}

		if (!validName || !validEmail || !validPhone) {
			form.addEventListener('keyup', e => {
				if (isValidName(name)) {
			 		nameWarning.textContent = '';
			 	}

				if (isValidEmail(email)) {
					emailWarning.textContent = '';
				}

				if (isValidPhone(phone)) {
					phoneWarning.textContent = '';
				}
			});
		}

		if (validName && validEmail && validPhone){
			let contactUrl = 'https://cyf-api.herokuapp.com/contact';
			let postBody = {
				name: name,
				email: email,
				phone: phone,
				message: message
			};
			postForm(contactUrl, postBody, form);
		}
	});
}

function populateNews(data){
	let newsContainer = document.querySelector('.news-content');

	for (let key in data){
		let item = data[key];
		let article = document.createElement('article');
		let author = document.createElement('address');
		let title = document.createElement('h4');
		let img = document.createElement('img');
		let text = document.createElement('p');


		author.textContent = `By ${item.author.firstName} ${item.author.lastName}` || '';
		author.classList.add('article-author');
		
		title.textContent = item.title;
		title.classList.add('article-title');

		img.setAttribute('src', item.image || './assets/default.jpg');
		img.classList.add('article-img');

		text.textContent = item.body;
		text.classList.add('article-body');


		article.appendChild(title);
		article.appendChild(author);
		article.appendChild(img);
		article.appendChild(text);
		article.classList.add('news-article');

		newsContainer.appendChild(article);
	}
}

function postForm(url, body, form) {
	fetch(url, {
		method: 'POST',
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(body)
	}).then(res => {
		res.json().then( data => {
			if (data.message === 'OK') {
				document.querySelector('.form-sent p').textContent = 'Your contact request have been submitted. We will contact you shorty!';
				form.classList.add('hide-element');
			}
		});
	}).catch(error => console.log(error));
}


