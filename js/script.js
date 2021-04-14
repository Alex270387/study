const numbersOffilms = +prompt('How many films are you watched?', '');

const personalMovieDB = {
    count: numbersOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What the final film are you watched?'),
    b = prompt('Your rating of film?'),
    c = prompt('What the final film are you watched?'),
    d = prompt('Your rating of film?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
