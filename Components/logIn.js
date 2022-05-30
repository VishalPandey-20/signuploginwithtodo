"use strict"
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
let localStorageremeberMe = localStorage.getItem("remberData");
localStorageremeberMe = JSON.parse(localStorageremeberMe)
if (localStorageremeberMe) {
    document.querySelector("#email").value = localStorageremeberMe.email;
    document.querySelector("#password").value = localStorageremeberMe.password;
    localStorage.removeItem("remberData");
}


function getLocalData() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    // console.log(email, password)
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    const abc = data.find((i) => {
        return i.email === email && i.confromPassword === password;
    })
    if (abc) {
        localStorage.setItem("logIn", email);
        localStorage.setItem("auth", JSON.stringify(true));
        window.location.href = './todo.html';
        return;
    }
    alert("email or password is either incorrent and does not exists!")
}

// export function userEmail(){

// }
const logIn = document.querySelector("#go").addEventListener("click", function(e) {
    e.preventDefault();
    userData()
    getLocalData();
    rember();
});

function rember() {
    const remember = document.querySelector('input[type="checkbox"]:checked');
    // console.log(remember);
    if (remember) {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const obj = {
            "email": email,
            "password": password
        }
        localStorage.setItem("remberData", JSON.stringify(obj))
    }
}

function userData() {
    let allUserData = localStorage.getItem("data");
    allUserData = JSON.parse(allUserData);
    console.log(allUserData);
    const email = document.querySelector("#email").value;
    const abc = allUserData.find((i) => {
        return i.email === email;
    })
    if (abc) {
        localStorage.setItem("firstName", JSON.stringify({ "firstName": abc.firstName }));
        return;
    }

}