const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findTitles = function () {
  const titles = this.films.map((movie) => movie.title);
  return titles;
};

Cinema.prototype.searchFilm = function (title) {
  const movie = this.films.filter((movie)=>{ 
    return movie.title === title});

    return movie[0];
}

Cinema.prototype.searchFilmByGenre = function (genre){
  const movie = this.films.filter((movie)=>{
    return movie.genre === genre});
    return movie[0]
}

Cinema.prototype.searchFilmByYear = function (year){
  const movies = this.films.filter(movie=>movie.year === year)
  return movies
}

Cinema.prototype.searchFilmByLength = function (runningTime){
  const movies = this.films.filter(movie=>movie.length >= runningTime)

  return movies
}

Cinema.prototype.totalMovieRunningTime = function(){
  const totalTime = this.films.reduce((totalRunTime, movie) => {
    return totalRunTime += movie.length;
  },0)
  return totalTime;
}

Cinema.prototype.filmsByProperty = function(property, value){
  const movies = this.films.filter((movie)=>{
    return  movie[property] === value
  })
  return movies
}

module.exports = Cinema;

