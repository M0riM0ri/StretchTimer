/* 変数 */
let f_timer = 0, startTime = 0, nowTime = 0, elapsedTime = 0, breakTime = 0;

/* 定数定義 */
const notification_btn = document.getElementById("notification-button");
const start_btn = document.getElementById("start-button");
const break_btn = document.getElementById("break-button");
const restart_btn = document.getElementById("restart-button");
const elapse_msg = document.getElementById("elapse-message");
const elapse_box = document.getElementById("elapse-box");
const time_block = document.getElementById("time-block");
const breaking = document.getElementById("break");
const timer = document.getElementById("time");
const main = document.getElementById("main");
const zero = document.getElementById("zero");

/* 通知許可ボタンクリック時動作 */
if ("Notification" in window) { //通知機能がある場合
  let permission = Notification.permission;
  if (permission === "granted") {
    notification_btn.style.display = "none";
    notification_btn.style.display = "none";
    elapse_msg.style.display = "block";
    elapse_box.style.display = "inline-block";
    start_btn.style.display = "block";
    zero.selected = true;

  }else{
    notification_btn.onclick = function () {
      Notification
        .requestPermission()  //通知許可ダイアログ表示
        .then(function () {
          let notification = new Notification("通知が許可されました。");
        });

      //表示切り替え
      notification_btn.style.display = "none";
      elapse_msg.style.display = "block";
      elapse_box.style.display = "inline-block";
      start_btn.style.display = "block";
      zero.selected = true;

    }  
  }    
}else{
  notification_btn.innerHTML = "このブラウザは本アプリに対応しておりません。"
}

/* 開始ボタンクリック時動作 */
start_btn.onclick = function () {
  breakTime = elapse_box.value;
  startTime = Date.now();
  f_timer = 1;

  //表示切り替え
  elapse_msg.style.display = "none";
  time_block.style.display = "block";
  break_btn.style.display = "block";
  document.title = "作業中";
}

/* 休憩ボタンクリック時動作 */
break_btn.onclick = function () {
  f_timer = 0;

  //表示切り替え
  time_block.style.display = "none";
  break_btn.style.display = "none";
  breaking.style.display = "block";
  restart_btn.style.display = "block";
  main.style.background = "#BEDFC2";
  document.title = "休憩中";
  zero.selected = true;
}

/* 再開ボタンクリック時動作 */
restart_btn.onclick = function () {
  timer.innerHTML = hour + "時間 " + minute + "分 " + second + "秒";
  restart_btn.style.display = "none";
  breaking.style.display = "none";
  elapse_msg.style.display = "block";
  elapse_box.style.display = "inline-block";
  start_btn.style.display = "block";
  zero.selected = true;
}

/* 休憩時間セット */
function elapseSet() {}
document.getElementById("elapse-box").onchange = elapseSet();

/* 時間計算 & 表示 */
function time() {
  if (f_timer === 1) {
    nowTime = Date.now();
    elapsedTime = nowTime - startTime;
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    let minutes = Math.floor(elapsedTime / 1000 / 60);
    let seconds = Math.floor(elapsedTime / 1000);
    

    timer.innerHTML = ('0' + hours).slice(-2) + " : " 
                    + ('0' + minutes).slice(-2) + " : "
                    + ('0' + seconds).slice(-2);

    //通知表示タイミング
    if (seconds == 0 && minutes == 30 && hours == 0) {
      Notification
        .requestPermission() //通知ダイアログ表示
        .then(function () {
          let notification = new Notification("30分が経過しました。");
        });
    }
    if (second == 0 && minute == 45 && hour == 0) {
      Notification
        .requestPermission() //通知ダイアログ表示
        .then(function () {
          let notification = new Notification("45分が経過しました。");
        });
    }
    // if (second == 0 && minute == 0 && hour == 1) {
      // if(second == 0 && minute == 1){
      // Push.create("1時間経過しました！", {
      //   body: "10〜15分の休憩を取りましょう",
      //   icon: imgList3[2],
      //   timeout: 6000,
      //   onClick: function () {
      //     this.close();
      //   }
      // });
    // } else if (second == 0 && minute % 15 == 0 && hour >= 1) {
      // Push.create("1時間以上連続VDT作業をしています", {
      //   body: "少し休憩を取ったほうが効率的に働けます",
      //   icon: imgList3[3],
      //   timeout: 6000,
      //   onClick: function () {
      //     this.close();
      //   }
      // });
    // }

    //時間表示
    // timer.innerHTML = hour + " :" + minute + " :" + second;
  }
}

/* 1000msec毎にtime関数を実行 */
setInterval(time, 1000);