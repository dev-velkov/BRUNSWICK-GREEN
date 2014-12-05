var requested = (function(){
    var headers =
    {
        "X-Parse-Application-Id": "jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx",
        "X-Parse-REST-API-Key": "05MEPKi8CWp4wp3dpTwDPWFz0zBwUGBdCrmYUkaz"
    };

    function userRegistration(username, password, success, error){
        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: "https://api.parse.com/1/users",
            data: JSON.stringify({username: username, password: password}),
            success: success,
            error: error
        });
    }

    return {
        register: userRegistration
    }

})();
