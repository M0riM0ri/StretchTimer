/* 変数 */
let f_timer = 0
let startTime = 0, nowTime = 0, elapsedTime = 0, breakTime = 0, pauseTime = 0;

/* 定数 */
const notification_btn = document.getElementById("notification-button");
const recommend_msg = document.getElementById("recommend-message");
const break_time_set = document.getElementById("break-time-set");
const break_time = document.getElementById("break-time");
const zero = document.getElementById("zero");
const start_btn = document.getElementById("start-button");
const time_display_box = document.getElementById("time-display-box");
const time_msg = document.getElementById("time-message");
const time_display = document.getElementById("time-display");
const pause_break_btn = document.getElementById("pause-break-button");
const pause_btn = document.getElementById("pause-button");
const break_btn = document.getElementById("break-button");
const break_msg = document.getElementById("break-message");
const restart_btn = document.getElementById("restart-button");

function notification_click(){
    //表示切り替え
    notification_btn.style.display = "none";
    recommend_msg.style.display = "block";
    break_time_set.style.display = "block";
    zero.selected = true;
    start_btn.style.display = "block";
}

/* 通知許可ボタンクリック時動作 */
if ("Notification" in window) { //通知機能がある場合
  let permission = Notification.permission;
  if (permission === "granted") { //通知許可されていたら

    notification_click();

  }else{
    notification_btn.onclick = function () {
      Notification
        .requestPermission()
        .then(function () {
          let notification = new Notification("通知が許可されました。");
        });

    notification_click();

    }
  }    
}else{ //通知機能がない場合
  notification_btn.innerHTML
    = "このブラウザは通知機能に対応しておりません</br>それでもよろしければ、このボタンをクリックしてください</br></br>通知機能を使用する場合、PCにてChrome/Firefox/Edge/Safariをお使いください";
  notification_btn.onclick = notification_click;
}

/* 開始ボタンクリック時動作 */
start_btn.onclick = function () {
  breakTime = break_time.value;
  startTime = Date.now();
  f_timer = 1;
  document.getElementById("worktime_start_time").value = Date.now();
  

  //表示切り替え
  recommend_msg.style.display = "none";
  break_time_set.style.display = "none";
  start_btn.style.display = "none";
  time_display_box.style.display = "block";
  pause_break_btn.style.display = "block";
  document.title = "計測中 ~StretchTimer~";
}

/* 一時停止ボタンクリック時動作 */
pause_btn.onclick = function () {
  if (f_timer  == 1){
    pauseTime = elapsedTime;
    f_timer = 0;
    time_msg.innerHTML = "一時停止中"
    document.title = "一時停止中 ~StretchTimer~";
  document.getElementById("worktime_pause_time").value = Date.now();
  }else{    
    startTime = Date.now();
    f_timer = 1;
    time_msg.innerHTML = "計測中"
    document.title = "計測中 ~StretchTimer~";
  }

  //表示切り替え
}

/* 休憩ボタンクリック時動作 */
break_btn.onclick = function () {
  f_timer = 0;
  pauseTime = 0;

  //表示切り替え
  time_display_box.style.display = "none";
  pause_break_btn.style.display = "none";
  break_msg.style.display = "block";
  restart_btn.style.display = "block";
  document.title = "休憩中 ~StretchTimer~";
}

/* 再開ボタンクリック時動作 */
restart_btn.onclick = function () {
  breakTime = break_time.value;
  startTime = Date.now();
  time_display.innerHTML = "00 : 00 : 00"
  f_timer = 1;

  //表示切り替え
  break_msg.style.display = "none";
  restart_btn.style.display = "none";
  time_display_box.style.display = "block";
  pause_break_btn.style.display = "block";
  time_msg.innerHTML = "計測中"
  document.title = "計測中 ~StretchTimer~";
}

/* 休憩時間セット */
function elapseSet() {}
document.getElementById("break-time").onchange = elapseSet();

/* 通知機能 */


/* 時間表示 */
function time() {
  if (f_timer == 1) {
    nowTime = Date.now();
    elapsedTime = nowTime - startTime + pauseTime;
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    let minutes = Math.floor(elapsedTime / 1000 / 60 % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    
    time_display.innerHTML = ('0' + hours).slice(-2) + " : "
                            + ('0' + minutes).slice(-2) + " : "
                            + ('0' + seconds).slice(-2);

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

/* 1000msec毎にtime関数を実行 */
setInterval(time, 1000);