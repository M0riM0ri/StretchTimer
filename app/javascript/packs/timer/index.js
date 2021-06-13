/* 定数 */
const notification_btn = document.getElementById("notification-button");
const recommend_msg = document.getElementById("recommend-message");
const break_time_set = document.getElementById("break-time-set");
const break_time = document.getElementById("break-time");
const zero = document.getElementById("zero");
const start_btn = document.getElementById("start-button");


/* 通知許可ボタンクリック時動作 */
function notification_click(){
    //表示切り替え
    notification_btn.style.display = "none";
    recommend_msg.style.display = "block";
    break_time_set.style.display = "block";
    zero.selected = true;
    start_btn.style.display = "block";
}

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
  document.getElementById("worktime_start_time").value = Date.now();
}

/* 休憩時間セット */
function elapseSet() {}
document.getElementById("break-time").onchange = elapseSet();

