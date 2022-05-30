// "use strict"
// let auth = localStorage.getItem("auth");
// auth = JSON.parse(auth);
// au()

// function au() {
//     if (auth) {
//         window.location.href = './todo.html'
//         return;
//     }
// }


// let timeout;
// // The strong and weak password Regex pattern checker

// // Adding an input event listener when a user types to the  password input
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
// let auth = localStorage.getItem("auth");
// auth = JSON.parse(auth);
// console.log(auth);
// console.log(typeof auth);
// if (auth) {
//     window.location.href = '../Components/todo.html'
// } else {
//     //     window.location.href = ''

// }

// let btn = document.querySelector(".log").addEventListener("click", function(e) {
//     e.preventDefault()
//     window.location.href = '../index.html'
//     return;
// })