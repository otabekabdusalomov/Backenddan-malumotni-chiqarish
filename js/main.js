"use strict";
const elList = document.querySelector(".list");


const renderUsers = function (arr, htmlElement) {
    setTimeout(function () {
      if (arr.length > 0) {
        elList.innerHTML = null;
  
        arr.forEach((item) => {
          const newLi = document.createElement("li");
  
          newLi.textContent = item.name;
  
          htmlElement.appendChild(newLi);
        });
      }
    }, 1000);
  };


const response = fetch("https://jsonplaceholder.typicode.com/users/")
.then(response => response.json())
.then(data => renderUsers(data, elList));
