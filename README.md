# Stretch Timer

![stretchtimer_movie](https://user-images.githubusercontent.com/50685708/123534859-2a809e00-d75b-11eb-8ad2-cbb6329a69eb.gif)

Stretch Timerは、健康的なPC作業をサポートします。

作業時間を記録し、休憩時間を通知してストレッチを促します。

https://stretchtimer.herokuapp.com/

## 概要

- 作業の開始時間、終了時間、休憩時間を記録できます。
- 設定した時間に休憩通知を送ります。
- 休憩中にお勧めのストレッチ動画を表示します。
- 休憩間隔に対し、適切な休憩を取れているかを判定します。
- ブラウザを閉じてもタイマーが継続します。

## 使用技術

- Ruby 2.6.3
- Ruby on Rails 6.0.4
- SQLite3 1.4.2 (local)
- PostgreSQL 13.3 (heroku)
- Puma 4.3.8
- webpacker 4.3.0
- jQuery 3.6.0
- Bootstrap 4.6.0
- heroku

## 機能一覧
- タイマー記録、削除(ajax)
- ユーザ登録、ログイン機能、編集機能(devise)
- ページネーション機能(kaminari)

## Author

[twitter](https://twitter.com/iSeanettle)

## Licence

[MIT](https://github.com/kotabrog/ft_mini_ls/blob/main/LICENSE)
