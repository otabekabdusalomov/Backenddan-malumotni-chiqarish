"use strict";
const elList = document.querySelector(".list");


const renderUsers = function(arr, htmlElement) {
    setTimeout(function() {
        if(arr.lenght > 0) {
            elList.innerHTML = null;
            arr.forEach(item => {
                const newLi = document.createElement("li")
    
                newLi.textContent = item.name
                htmlElement.appendChild(newLi);
            });
        }
    }, 1000);
   
};

const getUsers = async function() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");

   const data = await response.json();

//    console.log(data);

      renderUsers(data, elList);
};

getUsers()

// const response = fetch("https://jsonplaceholder.typicode.com/users/")
// .then((res) => res.json())
// .then((data) => renderUsers(data, newLi));

