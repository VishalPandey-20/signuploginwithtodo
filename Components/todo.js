// getting all required elements

let auth = localStorage.getItem("auth");
auth = JSON.parse(auth);
// console.log(typeof auth);
if (auth) {
    // window.location.href = "./todo.html"
} else {
    window.location.href = "../index.html";
}
let user = localStorage.getItem("firstName");
user = JSON.parse(user)
    // console.log(user.firstName);
document.getElementById("username").innerText = "hii.." + user.firstName

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
// onkeyup event
inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value;
    if (userEnteredValue.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}

showTasks();

addBtn.onclick = () => {
    let userEnteredValue = inputBox.value;
    let emailLogIn = localStorage.getItem("logIn");
    let getLocalStorageData = localStorage.getItem(emailLogIn);
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem(emailLogIn, JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
}

function showTasks() {
    let emailLogIn = localStorage.getItem("logIn");
    let getLocalStorageData = localStorage.getItem(emailLogIn);
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArray.length;
    if (listArray.length > 0) {
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element} <span class="edit" onclick="editTask(${index})"><i class="fas fa-edit"></i></span> <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

// delete task function
function deleteTask(index) {
    let emailLogIn = localStorage.getItem("logIn");
    let getLocalStorageData = localStorage.getItem(emailLogIn);
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem(emailLogIn, JSON.stringify(listArray));
    showTasks();
}

// delete all tasks function
deleteAllBtn.onclick = () => {

    let emailLogIn = localStorage.getItem("logIn");
    let getLocalStorageData = localStorage.getItem(emailLogIn);
    listArray = [];
    localStorage.setItem(emailLogIn, JSON.stringify(listArray));
    showTasks();
}


// delete task function
function editTask(index) {
    const inputBox = document.querySelector(".inputField input");
    let emailLogIn = localStorage.getItem("logIn");
    let getLocalStorageData = localStorage.getItem(emailLogIn);
    listArray = JSON.parse(getLocalStorageData);
    inputBox.value = listArray[index]
    inputBox.onkeyup = () => {
        let userEnteredValue = inputBox.value;
        if (userEnteredValue.trim() != 0) {
            addBtn.classList.add("active");
        } else {
            addBtn.classList.remove("active");
        }
    }
    listArray.splice(index, 1);
    localStorage.setItem(emailLogIn, JSON.stringify(listArray));
}

const edit = document.querySelectorAll(".edit");
edit.forEach((editBtn) => {
    editBtn.addEventListener("click", function(e) {
        e.preventDefault()
    })
})

let errr;
const log = document.querySelector(".log").addEventListener("click", function(e) {
    e.preventDefault()
    let auth = localStorage.getItem("auth");
    auth = JSON.parse(auth);
    console.log(typeof auth);
    if (auth) {
        window.location.href = "../index.html";
        auth = false;
        localStorage.setItem("auth", JSON.stringify(auth))
    } else {
        window.location.href = "./todo.html"
    }
})