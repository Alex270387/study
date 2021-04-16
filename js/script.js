const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films are you watched?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films are you watched?');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Quite a few movies watched');
        } else if (9 < personalMovieDB.count < 30) {
            alert('You are a classic spectator');
        } else if (personalMovieDB.count > 29) {
            alert('You are a movie fan');
        } else {
            alert('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let answer = prompt(`Your favorite genre number ${i}`);
            if (answer != null && answer != '') {
                personalMovieDB.genres[i - 1] = answer;
            } else {
                console.log('Error');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - this ${item}`);
        });
    }
};

console.log(personalMovieDB);
