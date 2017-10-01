var validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

var controlRForm = function(form) {
    var ret = "";

    if (form["username"]      === undefined || form["username"]      === "" ||
        form["email"]         === undefined || form["email"]         === "" ||
        form["password"]      === undefined || form["password"]      === "" ||
        form["password_conf"] === undefined || form["password_conf"] === "" ) {
        ret += "All fields are mandatory.\n";
    }
    else {
        if (form["username"].length < 2 || form["username"].length > 10) {
            ret += "Username: 2 to 10 characters required.\n";
        }
        if (form["password"] !== form["password_conf"]) {
            ret += "Password and password confirmation don't match.\n";
        }
        if (form["password"].length < 8 || form["password"].length > 20) {
            ret += "Password: 8 to 20 characters required.\n";
        }
        if (!validateEmail(form["email"])){
            ret += "Invalid email.\n";
        }
    }
    return ret;
};

function controlLForm(form) {
    var ret = "";
    if (form["email"]         === undefined || form["email"]         === "" ||
        form["password"]      === undefined || form["password"]      === "" ) {
        ret += "All fields are required.\n";
    }
    return ret;
}

exports.controlRForm = controlRForm;
exports.controlLForm = controlLForm;