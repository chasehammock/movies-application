/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */
const getMovies = require('./getMovies.js');
const movieDisplay = document.getElementById("movieDisplay");
const movieSubmit = document.getElementById("movieSubmit");
const movieObject = {};

/* GET THESE MOVIES */

getMovies().then((moviesData) => {
    let movies = "";
    console.log('Here are all the movies:');
    moviesData.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);

        movies += `<tr><td>id#${id} </td> ${title} <td> rating: ${rating}</td></tr>`;


        /* DISPLAY THE MOVIES ON THE PAGE  */
    });

    movieDisplay.innerHTML = `<table class="table">${movies}</table>`;
    /* CATCH THE ERRORS AND DISPLAY OOPS*/

}).catch((error) => {
    /*alert('Oh no! Something went wrong.\nCheck the console for details.')*/
    console.log(error);
});

 movieSubmit.click(addMovie);

 function addMovie() {
     let movieForm = movieSubmit.values();
     /*ratingvalue.concat(movieObject);*/
     console.log("ADDED MOVIES");
 };


