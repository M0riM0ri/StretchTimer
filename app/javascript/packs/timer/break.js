document.title = "休憩中 ~StretchTimer~";

const movie_id = ["iEda-ZxH_1M", "cuUU3UOkswg", "7EYkfn5yLOo", "hEUxM9BEqGc", "WRfT5RIMfYU", "h8tu-bWYatw"];
let movie_url = "https://www.youtube.com/embed/" + movie_id[Math.floor(Math.random() * movie_id.length)];

$('#movie').attr('src', movie_url);

$('#movie_switch').on('click', function () {
  let movie_url = "https://www.youtube.com/embed/" + movie_id[Math.floor(Math.random() * movie_id.length)];
  $('#movie').attr('src', movie_url);
});