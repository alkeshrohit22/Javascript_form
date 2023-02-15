function validationForm() {
    let f_name, l_name, email, password;

    f_name = document.forms["userForm"]["first_name"].value;
    l_name = document.forms["userForm"]["last_name"].value;
    email = document.forms["userForm"]["email"].value;
    password = document.forms["userForm"]["password"].value;

    // First name Validation
    var regName = /^[a-zA-Z]+$/;

    if (f_name == "" || f_name == null) {
        console.log("i am here");
        alert("Please Enter Your Name!!!");
        return false;
    }
    if ((f_name.length <= 2) || (f_name.length > 15)) {
        alert("To Less/Much Character in first name!!!");
        return false;
    }
    if (!regName.test(f_name)) {
        alert('Invalid first name given.');
        return false;
    }

    // Last Name Validation
    if (l_name == "" || l_name == null) {
        alert("Must Enter last Name in Form!!!");
        return false;
    }
    if ((l_name.length <= 2) || (l_name.length > 15)) {
        alert("To Less/Much Character last name!!!");
        return false;
    }
    if (!regName.test(l_name)) {
        alert('Invalid last name given.');
        return false;
    }

    // password validation
    passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegExp.test(password)) {
        alert('Invalid password given.');
        return false;
    }

    // Extra Email Validation
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(emailFormat)) {
        document.forms["userForm"]["email"].focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.forms["userForm"]["email"].focus();
        return false;
    }

}


function addData() {

    var first_name = document.getElementById("f_name").value;
    var last_name = document.getElementById("l_name").value;


    localStorage.setItem('userFirstName', first_name);
    localStorage.setItem('userLastName', last_name);

}