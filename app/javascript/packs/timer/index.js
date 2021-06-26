/* 通知許可ボタン動作 */
$(function(){
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      //通知許可されていたら
      notification_click();
    }else{
      //通知許可されていなかったら
      $('#notification_button').on('click', function () {
        Notification
          .requestPermission()
          .then(function () {
            let notification = new Notification("通知が許可されました。");
          });
        notification_click();
      });
    }
  }else{ //通知機能がない場合
    $('#notification_button').html(
      "このブラウザは通知機能に対応しておりません</br>通知機能なしでよい場合、このボタンをクリックしてください</br></br>通知機能を使用する場合、PCにてChrome/Firefox/Edge/Safariをお使いください");
    $('#notification_button').on('click', notification_click);
  }
  function notification_click() {
    $('#notification_button').hide();
    $('#recommend_message').show();
    $('#notification_timing_set').show();
    $("#notification_timing_set option[value='60']").prop('selected', true);
    $('#worktime_timing').val(60);
    localStorage.setItem('LocalTiming', 60);
    $('#recommend_message').show();
    $('#start_button').css('display', 'inline-block');
  }
});

/* startボタンクリック動作 */
  $('#start_button').on('click', function () {
    $('#worktime_start_time').val(Date.now());
    $('#worktime_pause_time').val(0);
    $('#worktime_restart_time').val(Date.now());
    $('#worktime_accumulate_time').val(0);
    $('#worktime_in_progress').val(1);
  });

/* 休憩時間セット */
function elapseSet() {}
$("#notification_timing").on('change', function() {
  $('#worktime_timing').val(this.value);
  localStorage.setItem('LocalTiming', this.value);
});

