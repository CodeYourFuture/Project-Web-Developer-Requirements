function hideNews() {
    var x = document.getElementById('news');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function validator() {
    var fields = [];
    //var flag = true;

    if (!validateName()) {
        fields.push('name')
        //flag = false;
    }
    if (!validateEmail()) {
        fields.push('email')
        //flag = false;
    }
    if (fields.length > 0) {
        alert("invalid field " + fields.join(" and "));
        return false;
    } else {
        return true;
    }
}
function validateName() {
    var value = document.getElementById("name").value;

    if (value == "") {
        return false;
    } else {
        return true;
    }
}

function validateEmail() {
    var value = document.getElementById("email").value;
    if (value == "" || value.indexOf("@") < 0) {
        return false;
    } else {
        return true;
    }
}
//document.getElementById("form").onsubmit = validator();
