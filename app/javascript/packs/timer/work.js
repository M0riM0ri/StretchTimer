let db_time, pause_time, restart_time, accumulate_time, in_progress;

if ($('#db_time').attr('data-json') != 'null') {
  /* ログイン時 */
  db_time = JSON.parse($('#db_time').attr('data-json'));
  pause_time = db_time.pause_time;
  restart_time = db_time.restart_time;
  accumulate_time = db_time.accumulate_time;
  in_progress = db_time.in_progress;
} else {
  /* 非ログイン時 */
  pause_time = 0;
  restart_time = Date.now();
  accumulate_time = 0;
  in_progress = 1;
}

if (in_progress == 0) {
  let elapsed_time = pause_time - restart_time + accumulate_time;
  let hours = Math.floor(elapsed_time / 1000 / 60 / 60);
  let minutes = Math.floor(elapsed_time / 1000 / 60 % 60);
  let seconds = Math.floor(elapsed_time / 1000 % 60);
  $('#time_display').html(('0' + hours).slice(-2) + " : " + ('0' + minutes).slice(-2) + " : " + ('0' + seconds).slice(-2));

  $('#pause_submit').prop('disabled', true);
  $('#pause_button_nologin').prop('disabled', true);
  $('#time_message').html('一時停止中');
  document.title = '一時停止中 ~StretchTimer~';
}else{
  $('#restart_submit').prop('disabled', true);
  $('#restart_button_nologin').prop('disabled', true);
  $('#time_message').html('計測中');
  document.title = '計測中 ~StretchTimer~';
}

/* pauseボタンクリック動作 */
$('#pause_button').on('click', function () {
  in_progress = 0;
  pause_time = Date.now();
  accumulate_time = pause_time - restart_time + accumulate_time;

  $('#time_message').html('一時停止中');
  document.title = '一時停止中 ~StretchTimer~';

  $('#pause_in_progress').val(0);
  $('#worktime_pause_time').val(Date.now());
  $('#pause_accumulate_time').val(accumulate_time);

  if (db_time != null) {
    document.pause_form.submit();
  }

  $('#pause_submit').prop('disabled', true);
  $('#restart_submit').prop('disabled', false);
  $('#pause_button_nologin').prop('disabled', true);
  $('#restart_button_nologin').prop('disabled', false);
});

/* restartボタンクリック動作 */
$('#restart_button').on('click', function () {
  in_progress = 1;
  restart_time = Date.now();

  $('#time_message').html('計測中');
  document.title = '計測中 ~StretchTimer~';

  $('#restart_in_progress').val(1);
  $('#worktime_restart_time').val(Date.now());
  if (db_time != null) {
    document.restart_form.submit();
  }

  $('#pause_submit').prop('disabled', false);
  $('#restart_submit').prop('disabled', true);
  $('#pause_button_nologin').prop('disabled', false);
  $('#restart_button_nologin').prop('disabled', true);
});

/* breakボタンクリック動作 */
$('#break_button').on('click', function () {
  if (in_progress){
    in_progress = 0;
    accumulate_time = Date.now() - restart_time + accumulate_time;
  }

  $('#break_in_progress').val(0);
  $('#worktime_end_time').val(Date.now());
  $('#break_accumulate_time').val(accumulate_time);
});

/* 時間表示 */
function time() {
  if (in_progress == 1) {
    let elapsed_time = Date.now() - restart_time + accumulate_time;
    let hours = Math.floor(elapsed_time / 1000 / 60 / 60);
    let minutes = Math.floor(elapsed_time / 1000 / 60 % 60);
    let seconds = Math.floor(elapsed_time / 1000 % 60);

    $('#time_display').html(('0' + hours).slice(-2) + " : " + ('0' + minutes).slice(-2) + " : " + ('0' + seconds).slice(-2));

    //通知表示
    if (seconds == 0 && minutes == 30 && hours == 0) {
      Notification
        .requestPermission()
        .then(function () {
          let notification = new Notification("30分が経過しました。");
        });
    }
    if (seconds == 0 && minutes == 45 && hours == 0) {
      Notification
        .requestPermission()
        .then(function () {
          let notification = new Notification("45分が経過しました。");
        });
    }
    if (seconds == 0 && minutes == 0 && hours == 1) {
      Notification
        .requestPermission()
        .then(function () {
          let notification = new Notification("1時間が経過しました。");
        });
    } else if (seconds == 0 && minutes % 15 == 0 && hours >= 1) {
      Notification
        .requestPermission()
        .then(function () {
          let notification = new Notification("1時間以上が経過しました。");
        });
    }
  }
}
setInterval(time, 1000);