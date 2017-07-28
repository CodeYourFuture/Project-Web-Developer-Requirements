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

			document.getElementById("form").onsubmit = function() {
				var nameElement = document.getElementById("name")
				var emailElement = document.getElementById("email")
				var messageElement = document.getElementById("message")
				
				var nameCount = nameElement.value.trim().length
				var messageCount = messageElement.value.length

				if (messageCount === 0) {
					alert ("Your name is empty...")
					return false
				}

				if (!validateEmail(emailElement.value)) {
					alert ("Please enter a valid email address...")
					return false
				}
				
				if (messageCount === 0) {
					alert ("Your message is empty...")
					return false
				} else if (messageCount > 1000) {
					alert ("Your message must be less than 1000 characters.")
					return false
				}
			};