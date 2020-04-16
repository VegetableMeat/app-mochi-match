# app-mochi-match
### <span style="color: #e83929;">も</span><span style="color: #e8c829;">ち</span><span style="color: #79e829;">も</span><span style="color: #29e869;">ち</span><span style="color: #29d8e8;">く</span><span style="color: #2949e8;">ん</span><span style="color: #9829e8;">監</span><span style="color: #e829a8;">修</span>

# 基本的なPushまでの流れ
**変更した内容をadd**  
- `git add *` （全部の場合）
- `git add { pushしたいファイル名 }`

**コミットメッセージを記述**  
- `git commit -m "{ ここにメッセージを残す }"`

**指定したブランチにpushする**  
- `git push origin { pushしたいブランチ名 }`  

# 新しいブランチを作成
- `git checkout -b { ブランチ名 }` （作成したと同時にブランチ切替）
- `git branch { ブランチ名 }` （作成のみ、ブランチ切替は行われない）

# 状態を確認したい場合
- `git status`  

# コマンド参考
- [Qiita ~Gitコマンド一覧~](https://qiita.com/fukumone/items/73e1a9a62c5e4454263b)
