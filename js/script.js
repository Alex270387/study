const numbersOffilms = +prompt('How many films are you watched?', '');

const personalMovieDB = {
    count: numbersOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('One of the last movies you watched?'),
          b = prompt('How much would you rate it?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Quite a few movies watched');
} else if (9 < personalMovieDB.count < 30) {
    alert('You are a classic spectator');
} else if (personalMovieDB.count > 29) {
    alert('You are a movie fan');
} else {
    alert('Error');
}

console.log(personalMovieDB);
