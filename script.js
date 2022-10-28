function Submit() {
    var username = document.getElementById("usernameError").value;
    var email = document.getElementById("emailError").value;
    var password = document.getElementById("passwordError").value;
    var confirm = document.getElementById("confirmError").value;

    if(username="" || email == "") {
        alert ("please enter Username or Password");
    }
    if(password< 8 || confirm < 8) {
        alert ("please ensure password is upto 8 characters");
    }
    else{
        alert ("Registeration Successfull");
    }
}
