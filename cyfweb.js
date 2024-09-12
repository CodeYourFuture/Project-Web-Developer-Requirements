
var hide = document.getElementById('hide');
hide.addEventListener('click' , hideNews);

function hideNews(event){
    var show = document.getElementById('show');
    if(show.style.display === 'none'){
        show.style.display ='block';
    }else{
        show.style.display = 'none';
    }
}

var form = document.getElementsByClassName('newForm');
var typeName = document.getElementById("typeName");
var typeContact =document.getElementById("typeContact");
var typeMail = document.getElementById("typeMail");
var subscripe = document.getElementsByClassName('subscripebtn');

document.querySelector('#typeName').addEventListener('change',function() {
    return this.value;
});
document.querySelector('#typeContact').addEventListener('change',function() {
    return this.value;
});
document.querySelector('#typeMail').addEventListener('change',function() {
    return this.value;
});

  function subscripepls(e){
    if(typeName.value.length <= 0){
        e.preventDefault();
    }
   
    else if(email.include('@')){return true;
    }else{
        var type ={
        name :typeName.value,
        email: typeMail.value,
        };
        var jasonData = JSON.stringify(ContactData);
        sendRequest(payload(jasonData))
        console.log(jasonData);

   }
}

var imagePlace = document.getElementById('image');
var image = document.createElement('img');
image.setAttribute('src' , 'image.jpg')
image.setAttribute('width','200px');
image.setAttribute('height', '200px');
imagePlace.appendChild(image);












