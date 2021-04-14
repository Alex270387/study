const numbersOffilms = +prompt('How many films are you watched?', '');

const personalMovieDB = {
    count: numbersOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last movies you watched?'),
    b = prompt('How much would you rate it?'),
    c = prompt('One of the last movies you watched?'),
    d = prompt('How much would you rate it?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
