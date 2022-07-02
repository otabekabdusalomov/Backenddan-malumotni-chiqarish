"use strict";

const API_KEY = 'b1566df1';
const search = "hulk";
const page = 1;

const getMovies = async function() {
    const request = await fetch(

        `https://omdbapi.com/?apikey=${API_KEY}b1566df1&s=${search}&page=${page}`
        );



    const data = await request.json();
    console.log(data.Search);
};

getMovies();