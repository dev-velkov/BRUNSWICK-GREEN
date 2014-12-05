function proceedRegistration(){
    var username = $("#user").val();
    var password = $("#pass").val();
    var confirmPass = $("#confirmPass").val();
    if(password == confirmPass){
        requested.register(username, password, registrationSuccessful, registrationError)

        function registrationSuccessful(){
            alert('Registration completed');
        }

        function registrationError(){
            alert('Error')
        }
    }
    else{
        alert('Passwords does NOT match')
    }

}