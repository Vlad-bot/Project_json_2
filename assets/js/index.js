'use strict';

/*function User(name, age) {
    this.name = name;
    this.age = age;

}

const user = new User("test", 87);
const executor = function (resolve, reject) {

    const number = Math.random() * 10;
    if(number > 5){
        resolve(number);
    }else {
        reject(new Error(`value is ${number}`));
    }
};

const promise = new Promise(executor);

promise
    .then(console.log)
    .catch(console.error);

//executor(console.log, console.error);*/
//////////////
/*
function executor (resolve, reject) {

    const request = new XMLHttpRequest();

    request.onload = () =>{
        resolve( request.responseText );

    };
    request.onerror = () => {
        reject(new Error(`${request.status} ${request.statusText}`) )
    };

    request.open('GET', "./user.json");
    request.send();

}

//executor(console.log, console.error);

const loadUserPromise = new Promise(executor);


loadUserPromise
    .then(console.log)
    .catch(console.error);

    function createUserItemToList(user) {
    const userItemContainer = document.createElement('li');
    userItemContainer.classList.add('userItem');

    const userFullNameElem = document.createElement('h3');
    userFullNameElem.classList.add('fullName');
    userFullNameElem.innerText = `${user.name} ${user.surname}`;

    const userAgeElem = document.createElement('h4');
    userAgeElem.classList.add("age");
    userAgeElem.innerText = user.age;
    userItemContainer.appendChild(userFullNameElem);
    userItemContainer.appendChild(userAgeElem);

    return userItemContainer;
}

function appendUserItemToList(user) {
    document.getElementById('userList').appendChild(createUserItem(user))
}*/


fetch('./user.json')
    .then(response => response.json())
    .then(appendUserItemToList)
    .catch(console.error);

const fetchPromise = fetch('./user.json');
const jsonPromise = fetchPromise.then(response => response.json()).catch(console.log);
const data = jsonPromise.then(data => {appendUserItemToList(data)}).catch(console.error);

/*function createPictureContainer(users) {
    const userPictureContainer = document.createElement("div");
    userPictureContainer.classList.add('imageContainer');

    userPictureContainer.append(getUserPictureElem(users));
    return userPictureContainer;
}
function getUserPictureElem([picturePath]) {
    const userPictureElem = document.createElement('img');
    userPictureElem.setAttribute('src', picturePath ? picturePath : "https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png");
    userPictureElem.setAttribute("alt", "user picture");

    return userPictureElem;
}*/

function createUserItem(user) {
    const userItemContainer = document.createElement('li');
    userItemContainer.classList.add('userItem');


    const userFullNameElem = document.createElement('h3');
    userFullNameElem.innerText = `${user.name} ${user.surname}`;

    const userAgeElem = document.createElement('h4');
    userAgeElem.innerText = user.age;
    userItemContainer.appendChild(userFullNameElem);
    userItemContainer.appendChild(userAgeElem);

    return userItemContainer;
}




function appendUserItemToList(user) {
    document.getElementById('userList').appendChild(createUserItem(user))
}













