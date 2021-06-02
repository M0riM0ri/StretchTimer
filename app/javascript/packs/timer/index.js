/* 変数初期化 */
let start = 0, second = 0, minute = 0, hour = 0;
let imgNumber = 0, imgNumberZ = 0;

// /* fitness画像 */
// const imgList = new Array(
//   './picture/fitness/fitness.PNG', './picture/fitness/fitness1.PNG',
//   './picture/fitness/fitness2.PNG', './picture/fitness/fitness3.PNG',
//   './picture/fitness/fitness4.PNG', './picture/fitness/fitness5.PNG',
//   './picture/fitness/fitness6.PNG'
// );

// /* 遷移画像 */
// const imgList2 = new Array(
//   './picture/chart/00.jpg',
//   './picture/chart/00.jpg', './picture/chart/10.gif',
//   './picture/chart/15.gif', './picture/chart/20.gif',
//   './picture/chart/25.gif', './picture/chart/30.gif',
//   './picture/chart/35.gif', './picture/chart/40.gif',
//   './picture/chart/45.gif', './picture/chart/50.gif',
//   './picture/chart/55.gif', './picture/chart/60.gif'
// );

// /* アイコン画像 */
// const imgList3 = new Array(
//   './picture/face/face_good.png',
//   './picture/face/face_normal.png',
//   './picture/face/face_bad.png',
//   './picture/face/face_sobad.png'
// );

/* 定数定義 */
const init_btn = document.getElementById("init-button");
const start_btn = document.getElementById("start-button");
const reset_btn = document.getElementById("reset-button");
const restart_btn = document.getElementById("restart-button");
const elapse_msg = document.getElementById("elapse-message");
const elapse_box = document.getElementById("elapse-box");
const time_block = document.getElementById("time-block");
// const chart_pic = document.getElementById("chart-pic");
// const break_pic = document.getElementById("break-pic");
const breaking = document.getElementById("break");
const timer = document.getElementById("time");
const main = document.getElementById("main");
const zero = document.getElementById("zero");

/* 通知許可ボタンクリック時動作 */
init_btn.onclick = function () {
  init_btn.style.display   = "none";
  elapse_msg.style.display = "block";
  elapse_box.style.display = "inline-block";
  start_btn.style.display  = "block";
  zero.selected = true;
}

/* 開始ボタンクリック時動作 */
start_btn.onclick = function () {
  minute = elapse_box.value;
  elapse_msg.style.display = "none";
  start = 1;
  // 初期画像表示
  // imgNumber = parseInt(minute / 5);
  // if (hour == 0) {
  //   chart_pic.src = imgList2[imgNumber];
  // } else {
  //   chart_pic.src = imgList2[12];
  // }
  time_block.style.display = "block";
  // chart_pic.style.display = "block";
  reset_btn.style.display = "block";
  main.style.background = "#FFFCDB";
  document.title = "作業中 ～Work-Timer～";
}

/* 休憩ボタンクリック時動作 */
reset_btn.onclick = function () {
  start = 0, second = 0, minute = 0, hour = 0;
  time_block.style.display = "none";
  // chart_pic.style.display = "none";
  reset_btn.style.display = "none";
  breaking.style.display = "block";
  // break_pic.style.display = "block";
  restart_btn.style.display = "block";
  main.style.background = "#BEDFC2";
  document.title = "休憩中 ～Work-Timer～";
  zero.selected = true;
}

/* 再開ボタンクリック時動作 */
restart_btn.onclick = function () {
  timer.innerHTML = hour + "時間 " + minute + "分 " + second + "秒";
  restart_btn.style.display = "none";
  breaking.style.display = "none";
  // break_pic.style.display = "none";
  elapse_msg.style.display = "block";
  elapse_box.style.display = "inline-block";
  start_btn.style.display = "block";
  zero.selected = true;
}

/* 初期時間セット */
function elapseSet() {}
document.getElementById("elapse-box").onchange = elapseSet();

/* 時間計算 & 表示 */
function time() {
  console.log('Hello');
  if (start === 1) {
    second++;
    if (second === 60) {
      minute++;
      second = 0;

      // 遷移画像表示タイミング
      // imgNumber = parseInt(minute / 5);
      // if (hour == 0) {
      //   chart_pic.src = imgList2[imgNumber];
      // } else {
      //   chart_pic.src = imgList2[12];
      // }

    }
    if (minute === 60) {
      hour++;
      minute = 0;
    }

    //通知表示タイミング
    if (second == 0 && minute == 30 && hour == 0) {
      // // if(second == 30){
      // Push.create("30分経過しました！", {
      //   body: "1〜2分の休憩を取りましょう",
      //   icon: imgList3[0],
      //   timeout: 6000,
      //   onClick: function () {
      //     this.close();
      //   }
      // });
    }
    if (second == 0 && minute == 45 && hour == 0) {
      // if(second == 45){
      // Push.create("45分経過しました！", {
      //   body: "そろそろ集中力が切れてきてませんか？",
      //   icon: imgList3[1],
      //   timeout: 6000,
      //   onClick: function () {
      //     this.close();
      //   }
      // });
    }
    if (second == 0 && minute == 0 && hour == 1) {
      // if(second == 0 && minute == 1){
      // Push.create("1時間経過しました！", {
      //   body: "10〜15分の休憩を取りましょう",
      //   icon: imgList3[2],
      //   timeout: 6000,
      //   onClick: function () {
      //     this.close();
      //   }
      // });
    } else if (second == 0 && minute % 15 == 0 && hour >= 1) {
      // Push.create("1時間以上連続VDT作業をしています", {
      //   body: "少し休憩を取ったほうが効率的に働けます",
      //   icon: imgList3[3],
      //   timeout: 6000,
      //   onClick: function () {
      //     this.close();
      //   }
      // });
    }

    //時間表示
    timer.innerHTML = hour + "時間 " + minute + "分 " + second + "秒";
  }
}

/* 1000msec毎にtime関数を実行 */
setInterval(time, 1000);