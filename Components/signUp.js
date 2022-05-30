"use strict";
//Google Autocomplete
let auth = localStorage.getItem("auth");
auth = JSON.parse(auth);
console.log(auth);
au()

function au() {
    if (auth === true) {
        window.location.href = './todo.html'
        return;
    }
}

function initAutocomplete() {
    const input = document.querySelector("#Address");
    return new google.maps.places.Autocomplete(input);
}

let istrue;

function userName() {
    const firstName = document.querySelector("#FirstName").value;
    if (firstName) {
        istrue = true;
        return istrue;
    } else {
        istrue = false;
        return istrue;
    }

}

let istrue1;

function userLastName() {
    const lastName = document.querySelector("#LastName").value;
    if (lastName) {
        istrue1 = true;
        return true;
    } else {
        istrue1 = false;
        return istrue1;
    }

}

let istrue2;

let dob = document.getElementById('dob');

function date() {
    dob = document.getElementById('dob').value;
    dob = new Date(dob).getFullYear()
    if ((new Date().getFullYear() - dob) > 18) {
        istrue2 = true;
        let spantext = document.querySelector("#under-age-error");
        spantext.classList.add("hide");
        return istrue2;
    } else {
        istrue2 = false;
        let spantext = document.querySelector("#under-age-error");
        spantext.classList.remove("hide");
        spantext.value = "U are under below"
        return istrue2;

    }
}

dob.addEventListener("blur", date)

let err2
const email = document.querySelector("#email")
    //emailCheck
const emailError = document.querySelector("#email-error");
email.addEventListener("blur", function() {
    const regex = /^[0-9]/;
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email.value) && !email.value.match(regex)) {
        err2 = true;
        emailError.classList.add("hide");
    } else {
        emailError.innerHTML = "Invalid Email";
        emailError.classList.remove("hide");
        err2 = false;
    }
});

const Password = document.querySelector("#Password")
let istrue4;
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
Password.addEventListener("blur", function() {
    if (strongRegex.test(Password.value)) {
        passwordStrong.classList.add("hide");
        istrue4 = true;
        return istrue4;
    } else {
        let passwordStrong = document.getElementById("passwordStrong");
        passwordStrong.classList.remove("hide");
        istrue4 = false;
        return istrue4;
    }
})

let istrue5;
const ConfromPassword = document.querySelector("#ConfromPassword");
ConfromPassword.addEventListener("blur", function() {
    const Password = document.querySelector("#Password").value;
    if (Password === ConfromPassword.value) {
        matched.classList.add("hide");
        istrue5 = true;
        return istrue5;
        // console.log("hhhhh");
    } else {
        const matched = document.querySelector("#matched")
        matched.classList.remove("hide");
        istrue5 = false;
        return istrue5;

    }
});


function sigUpData() {
    const firstName = document.querySelector("#FirstName").value;
    const lastName = document.querySelector("#LastName").value;
    const phone = document.querySelector("#phone").value;
    const address = document.querySelector("#Address").value;
    const email = document.querySelector("#email").value;
    const confromPassword = document.querySelector("#ConfromPassword").value;
    let localData = localStorage.getItem("data");
    console.log(localData, "localDatalocalData");

    let allData = []
    const data = {
        "firstName": firstName,
        "lastName": lastName,
        "phone": phone,
        "address": address,
        "email": email,
        "confromPassword": confromPassword,
    }

    if (localData === null) {
        allData.push(data);
        localStorage.setItem("data", JSON.stringify(allData))
        localStorage.setItem(data.email, JSON.stringify([]))
        localStorage.setItem("firstName", JSON.stringify(firstName))
    } else {
        localData = JSON.parse(localData)
        localData.push(data);
        localStorage.setItem("data", JSON.stringify(localData))
        localStorage.setItem(data.email, JSON.stringify([]))
        localStorage.setItem("firstName", JSON.stringify(firstName))
    }
    window.location.href = './LogIn.html'
}
let istrue6;

function EmailArray() {
    console.log("emailArryemailArryemailArry");
    let localData = localStorage.getItem("data");
    // console.log(localData);
    localData = JSON.parse(localData);
    let emailArry = []
    if (localData) {
        localData.map((i) => {
            // console.log(i);
            emailArry.push(i.email)
        })
    }

    console.log(emailArry, "emailArryemailArry");
    const email = document.querySelector("#email").value;
    if (!emailArry.includes(email)) {
        istrue6 = true;
        return istrue6;

    } else {
        istrue6 = false;
        return istrue6
    }


}
// EmailArray()
// console.log(EmailArray());
const btn = document.querySelector(".btn").addEventListener("click", function(e) {
    e.preventDefault()
    userName();
    userLastName()
    EmailArray()
    console.log("a", istrue);
    console.log("b", istrue1);
    console.log("c", istrue2);
    console.log("d", istrue4);
    console.log("e", istrue5);
    console.log("g", istrue6);
    console.log("f", err2)
    if (!istrue || !istrue1 || !istrue2 || !istrue4 || !istrue5 || !err2 || !istrue6) {
        alert("please fill the data correctly..! and check your email...!");
        return;
    }
    sigUpData()
})