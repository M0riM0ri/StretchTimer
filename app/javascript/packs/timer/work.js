let f_timer = 1;
document.title = "計測中 ~StretchTimer~";

let nowTime = 0, elapsedTime = 0, breakTime = 0, pauseTime = 0;

const time_display_box = document.getElementById("time-display-box");
const time_msg = document.getElementById("time-message");
const time_display = document.getElementById("time-display");
const pause_break_btn = document.getElementById("pause-break-button");
const pause_btn = document.getElementById("pause-button");
const restart_btn = document.getElementById("restart-button");
const break_btn = document.getElementById("break-button");
const break_msg = document.getElementById("break-message");
const pause_time = document.getElementById("worktime_pause_time");
const restart_time = document.getElementById("worktime_restart_time");
const end_time = document.getElementById("worktime_end_time");
const pause_submit = document.getElementById("pause_submit");
const restart_submit = document.getElementById("restart_submit");
const pause_in_progress = document.getElementById("pause_in_progress");
const restart_in_progress = document.getElementById("restart_in_progress");
const break_in_progress = document.getElementById("break_in_progress");

/* pauseボタンクリック動作 */
pause_btn.onclick = function () {
  pauseTime = elapsedTime;
  f_timer = 0;
  time_msg.innerText = "一時停止中"
  document.title = "一時停止中 ~StretchTimer~";
  if (pause_time != null) {
    pause_in_progress.value = 0;
    pause_time.value = Date.now();
  }
  document.pause_form.submit();
  pause_submit.disabled = true;
  restart_submit.disabled = false;
}

/* restartボタンクリック動作 */
restart_btn.onclick = function () {
  f_timer = 1;
  time_msg.innerText = "計測中"
  document.title = "計測中 ~StretchTimer~";
  pause_submit.disabled = false;
  if (restart_time != null) {
    restart_in_progress.value = 1;
    restart_time.value = Date.now();
  }
  document.restart_form.submit();
  pause_submit.disabled = false;
  restart_submit.disabled = true;
}

/* breakボタンクリック動作 */
break_btn.onclick = function () {
  f_timer = 0;
  if (end_time != null) {
    break_in_progress.value = 0;
    end_time.value = Date.now();
  }
}

/* 時間表示 */
function time() {
  if (f_timer == 1) {
    nowTime = Date.now();
    elapsedTime = nowTime - start_time + pauseTime;
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    let minutes = Math.floor(elapsedTime / 1000 / 60 % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);

    time_display.innerHTML = ('0' + hours).slice(-2) + " : " +
      ('0' + minutes).slice(-2) + " : " +
      ('0' + seconds).slice(-2);

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