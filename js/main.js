"use strict";

const response = fetch("https://jsonplaceholder.typicode.com/users/").then
(response => response.json()).then(data => console.log((data)));

console.log(response);