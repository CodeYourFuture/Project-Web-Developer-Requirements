function updateWordCount() {
				var messageElement = document.getElementById("message")
				var counterElement = document.getElementById("counter")

				var wordCount = countWords(messageElement.value)
				counterElement.innerHTML = "Word count: " + wordCount
			};
			
			function countWords(str) {
				var cleanedStr = str.trim().replace(/\s\s+/g, '')
				if (cleanedStr.length === 0) {
					return 0 
				}
  				return cleanedStr.split(' ').length
			};

			function validateEmail(email) {
    			var re = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    			return re.test(email);
			};

			function validateName(name){
				var checkName = /^[a-zA-Z\s]{3,}$/ig.test(name);
				if (checkName) 
					return true;
			};

			document.getElementById("form").onsubmit = function() {
				var nameElement = document.getElementById("name")
				var emailElement = document.getElementById("email")
				var messageElement = document.getElementById("message")
				
				var nameCount = nameElement.value.trim().length
				var messageCount = messageElement.value.length

				if (!validateName(nameElement.value)) {					
					alert ("Your name is empty or too short. The Username should be at least three letters long...")
					return false;
				}

				if (!validateEmail(emailElement.value)) {
					alert ("Please enter a valid email address...")
					return false;
				}
				
				if (messageCount === 0) {
					alert ("Your message is empty...")
					return false;
				} else if (messageCount > 1000) {
					alert ("Your message must be less than 1000 characters.")
					return false;
				}

				return true;
			};

var hide = document.querySelector('#submit1');
hide.addEventListener('click' , hideNews);

function hideNews(event) {
  event.preventDefault();

  var articlesToHide = document.querySelectorAll('.sub-article')
  articlesToHide.forEach(function(news) {
    if (news.style.display === 'none') {
      news.style.display ='block';
      hide.style.color='#693d3a';

    } else {
      news.style.display = 'none';
      hide.style.color = '#d12f2f';
      }
  })
};