"use strict"

//Google Autocomplete
function initAutocomplete() {
    const input = document.querySelector("#Address");
    // const options = {
    //   bounds: defaultBounds,
    //   componentRestrictions: { country: "us" },
    //   fields: ["address_components", "geometry", "icon", "name"],
    //   strictBounds: false,
    //   types: ["establishment"],
    // };
    return new google.maps.places.Autocomplete(input);
}
let [err1, err2, err3, err4, err5] = [false, false, false, false, false];
const err = "error"
let lowerCaseLetters = /[a-z]/
let uperCaseLetters = /[A-Z]/
let number = /[0-9]/
let special = /[@#$%&]/

let isTrue = true;
let isTrue2 = true;


function strongPass() {
    let password = document.querySelector("#Password").value;
    const confromPassword = document.querySelector("#ConfromPassword").value;
    if (password.length >= 8 && password.length <= 12) {
        if (uperCaseLetters.test(password)) {
            if (number.test(password)) {
                if (special.test(password)) {
                    if (password === confromPassword) {
                        isTrue = true;
                        return password;
                    } else {

                        isTrue = false;
                        alert("Password is incorrect....!");
                        return isTrue;
                    }

                } else {
                    isTrue = false;
                    alert("must be a special '@#$%&")
                    return isTrue
                }
            } else {
                isTrue = false;
                alert("must be a number...!")
                return isTrue
            }
        } else {
            isTrue = false;
            alert("must be capital letter..!")
            return isTrue
        }
    } else {
        isTrue = false;
        alert("Password is must be 8 to 12..!")
        return isTrue
    }
}

let reset = function(elem) {
    elem.innerHTML = "";
    elem.classList.add("hide");
};

const emailError = document.querySelector("#email-error");
email.addEventListener("blur", function() {
    reset(emailError);
    const atPosition = email.value.indexOf("@");
    const dotPosition = email.value.lastIndexOf(".");
    const customEmail = email.value.slice(0, atPosition);
    console.log(customEmail);
    const regex = /^[0-9]/;
    const regex2 = /^[@,$,.,#,]/;
    const regex3 = /[@,$,.,#,]/;
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
        re.test(email.value) &&
        !email.value.match(regex)

    ) { isTrue2 = true } else {
        isTrue2 = false;
        alert("Invalid Email");
        return isTrue
    }
    if (!email.value.length) reset(emailError);
});

email.addEventListener("change", reset(emailError));
email.addEventListener("keyup", reset(emailError));


function sigUpData(pass) {
    if (!isTrue || !isTrue2) {
        console.log(isTrue, "isTrueisTrueisTrue", isTrue2);
        alert("Plz insert data correctly")
        return;
    }
    const firstName = document.querySelector("#FirstName").value;
    const lastName = document.querySelector("#LastName").value;
    const phone = document.querySelector("#phone").value;
    const address = document.querySelector("#Address").value;
    const email = document.querySelector("#email").value;
    const confromPassword = document.querySelector("#ConfromPassword").value;
    let localData = localStorage.getItem("data");
    // console.log(localData);
    let allData = []
    const data = {
        "firstName": firstName,
        "lastName": lastName,
        "phone": phone,
        "address": address,
        "email": email,
        "password": pass,
        "confromPassword": confromPassword,
    }
    if (localData === null) {
        allData.push(data);
        localStorage.setItem("data", JSON.stringify(allData))
        localStorage.setItem(data.email, JSON.stringify([]))
    } else {
        localData = JSON.parse(localData)
        localData.push(data);
        localStorage.setItem("data", JSON.stringify(localData))
        localStorage.setItem(data.email, JSON.stringify([]))
    }
    window.location.href = '../index.html'
        // if (pass === confromPassword) {

}


const btn = document.querySelector(".btn").addEventListener("click", function(e) {
    e.preventDefault()
    const firstName = document.querySelector("#FirstName").value;
    const lastName = document.querySelector("#LastName").value;
    const phone = document.querySelector("#phone").value;
    const address = document.querySelector("#Address").value;
    const email = document.querySelector("#email").value;
    const confromPassword = document.querySelector("#ConfromPassword").value;
    if (!firstName || !lastName || !phone || !address || !email || !confromPassword) {
        alert("fill input fields first..!")
        return;
    }

    sigUpData(strongPass())

})