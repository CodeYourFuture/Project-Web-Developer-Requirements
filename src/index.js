var hide = document.querySelector('#hide');
hide.addEventListener('click' , hideNews);

function hideNews(event){
    var news = document.getElementById('news');
    if(news.style.display === 'none'){
        news.style.display ='block';
        hide.style.color='#693d3a';
    }else{
        news.style.display = 'none';
        hide.style.color = '#d12f2f';
    }
    event.preventDefault();
    

}
var contactName = document.getElementById('contactName');
var email = document.getElementById('email');
var charcters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 

var submit = document.getElementById('submit');
submit.addEventListener('click' , submition);
var form = document.getElementById('form');



function submition(event){
    if(contactName.value.length <= 0){
        event.preventDefault();
        alert('you should write your name')
    }
    else if(!charcters.test(email.value)){
        event.preventDefault();
        alert('please write a valid email')
    }else{
        var ContactData ={
        contact :contactName.value,
        emailAddress : email.value,
        };
        form.style.color ='red'
        form.style.fontFamily = "Myriad"
        form.style.fontSize = '3em'
        form.innerHTML = "your form succesfuly submited!";
        var jasonData = JSON.stringify(ContactData);
        sendRequest(payload(jasonData));

    }
}

var newsTitle = document.querySelector('.news-title');
var newsBody = document.querySelector('#body-text');
var nextNews = document.getElementById('next-news');
var imagePlace = document.getElementById('image');
var image = document.createElement('img');
image.setAttribute('src' , './images/300.png')
image.setAttribute('width','170px');
image.setAttribute('height', ' 150px');
imagePlace.appendChild(image);



console.log(newsBody.innerHTML)
var request = new XMLHttpRequest();
request.onreadystatechange = function (){
  if (request.readyState === 4){
    if (request.status === 200){
        var allNews =JSON.parse(request.responseText);
        nextNews.addEventListener('click' , changenews)
        var i = 0;
        function changenews(){
        newsTitle.innerHTML = allNews[i].title;
        newsBody.innerHTML = allNews[i].body;
        image.src=allNews[i].image;

            if(i < allNews.length -1){
                return i++
            }else{
               return  i = 0
        }
        }
        console.log(allNews[i].body)



    }else {
        form.innerHTML ='there is an error please refresh the page '
    }
  }
}

console.log(request)
function sendRequest(params){
  var url = 'https://cyf-api.herokuapp.com/contact';
  request.open('POST' , url , true);
  request.setRequestHeader( 'Content-type' , 'application/json');
  request.send(params);
}

function payload(message){
  var jason = { "message" : message };
  return JSON.stringify(jason);
}



var url = 'https://cyf-api.herokuapp.com/news';
request.open('GET',url);
request.setRequestHeader('Accepts' , 'application/json');
request.send();





