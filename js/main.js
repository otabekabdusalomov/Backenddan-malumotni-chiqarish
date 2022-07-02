"use strict";
const elList = document.querySelector(".list");


const renderUsers = function(arr, htmlElement) {
    if(arr.lenght > 0) {
        arr.forEach(item => {
            const newLi = document.createElement("li")

            newLi.textContent = item.name
            htmlElement.appendChild(newLi);
        });
    }
};



const response = fetch("https://jsonplaceholder.typicode.com/users/")
.then((res) => res.json())
.then((data) => renderUsers(data, newLi));

