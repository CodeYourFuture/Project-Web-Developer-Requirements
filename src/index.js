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


function submition(event){
    if(contactName.value.length <= 0){
        event.preventDefault();
        alert('you should write your name')
    }
    else if(!charcters.test(email.value)){
        event.preventDefault();
        alert('please write a valid email')
    }else{
     var Jason ={
     contact :contactName.value,
     emailAddress : email.value,
    }
        console.log(JSON.stringify(Jason))

    }
}