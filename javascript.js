document.getElementById("alert").addEventListener("click", myFunc);

function myFunc() {
    alert("Alert!");
}

function checkInput() {
    let email = document.forms["contact_form"]["email"].value;
    let name = document.forms["contact_form"]["name"].value;
    if (email == "" || name=="") {
        alert("Please fill out the input!");
    }
    else {
        alert("Thanks!")
    }
}