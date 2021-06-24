document.title = "休憩中 ~StretchTimer~";

const movie_id = ["iEda-ZxH_1M", //首の横のストレッチ
                  "cuUU3UOkswg", //首の前のストレッチ
                  "7EYkfn5yLOo", //目の疲れを改善するマッサージ①
                  "hEUxM9BEqGc", //肩甲骨マッサージ
                  "GPbVezfVaiE", //肩甲骨ほぐし①
                  "o9Z3f8V6fn8", //肩甲骨ほぐし②
                  "WRfT5RIMfYU", //肩甲骨ほぐし③
                  "a9TEEliF1w4", //腕回し
                  "h8tu-bWYatw", //肋骨マッサージ
                ];


let movie_url = "https://www.youtube.com/embed/" + movie_id[Math.floor(Math.random() * movie_id.length)];

$('#movie').attr('src', movie_url);

$('#movie_switch').on('click', function () {
  let movie_url = "https://www.youtube.com/embed/" + movie_id[Math.floor(Math.random() * movie_id.length)];
  $('#movie').attr('src', movie_url);
});