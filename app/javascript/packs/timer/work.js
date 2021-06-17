let f_timer = 1
startTime = Date.now();
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

/* pauseボタンクリック動作 */
pause_btn.onclick = function () {
  pauseTime = elapsedTime;
  f_timer = 0;
  time_msg.innerText = "一時停止中"
  document.title = "一時停止中 ~StretchTimer~";
  document.getElementById("restart_submit").disabled = false;
  if (pause_time != null) {
    pause_time.value = Date.now();
  }
}

/* restartボタンクリック動作 */
restart_btn.onclick = function () {
  startTime = Date.now();
  f_timer = 1;
  time_msg.innerText = "計測中"
  document.title = "計測中 ~StretchTimer~";
  document.getElementById("pause_submit").disabled = false;
  if (restart_time != null) {
    restart_time.value = Date.now();
  }
}

/* breakボタンクリック動作 */
break_btn.onclick = function () {
  f_timer = 0;
  if (end_time != null) {
    end_time.value = Date.now();
  }
}

/* 時間表示 */
function time() {
  if (f_timer == 1) {
    nowTime = Date.now();
    elapsedTime = nowTime - startTime + pauseTime;
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