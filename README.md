# app-mochi-match
### <span style="color: #e83929;">も</span><span style="color: #e8c829;">ち</span><span style="color: #79e829;">も</span><span style="color: #29e869;">ち</span><span style="color: #29d8e8;">く</span><span style="color: #2949e8;">ん</span><span style="color: #9829e8;">監</span><span style="color: #e829a8;">修</span>

# 基本的なPushまでの流れ
### **変更した内容をadd**  
| コマンド | 備考 |
| ---- | ---- |
| `git add .` | 変更したファイルをすべてステージングに上げる |
| `git add pushしたいファイル名` | 一つずつ指定したい場合はこっち |

### **コミットメッセージを記述**  
| コマンド | 備考 |
| ---- | ---- |
| `git commit -m "ここにメッセージを残す"` | コミットメッセージには「何を」と「なぜ」を書く |

[わかりやすいコミットメッセージを考える](https://www.tam-tam.co.jp/tipsnote/program/post16686.html)

### **ブランチにPush**  
| コマンド | 備考 |
| ---- | ---- |
| `git push origin pushしたいブランチ名` | 指定したブランチにPushする |
| `git push origin HEAD` | 大抵はこっちでいい |

# 他色々
### **ブランチを作成** 
| コマンド | 備考 |
| ---- | ---- |
| `git checkout -b ブランチ名` | 作成したと同時にブランチ切替 |
| `git branch ブランチ名` | 作成のみ、ブランチ切替は行われない |

### **ブランチの切り替え** 
| コマンド | 備考 |
| ---- | ---- |
| `git checkout ブランチ名` | 指定したブランチへ切り替え |

### **ローカルブランチを削除** 
| コマンド | 備考 |
| ---- | ---- |
| `git branch --delete ローカルブランチ名` | 指定したローカルブランチを削除、マージされていない場合は警告が出る |
| `git branch -D ローカルブランチ名` | すべて無視、問答無用で消すやつ |

### **リモートブランチを削除** 
| コマンド | 備考 |
| ---- | ---- |
| `git push origin :リモートブランチ名` | 指定したリモートブランチを削除 |

### **いじったファイルの表示**
| コマンド | 備考 |
| ---- | ---- |
| `git status` | 特になし |

### **まーじ**
| コマンド | 備考 |
| ---- | ---- |
| `git merge 取り入れるブランチ名` | 今いるブランチに指定されたブランチの変更点をがっちゃんこ、メモ用 |

[Qiita Gitコマンド一覧](https://qiita.com/fukumone/items/73e1a9a62c5e4454263b)

# なんかPushできない＞＜
Windowsでよくある `Permissionほにゃほにゃ` について  
※この手順は踏んでいるものとする → [Qiita GitHubにssh接続できるようにする](https://qiita.com/0ta2/items/25c27d447378b13a1ac3)  
### **ローカルが悪い場合、Git bashにて以下を入力**
```
$ eval `ssh-agent`
```
```
$ ssh-add ~/.ssh/登録したKey名 （.pub付いてない方）
```
以下が表示されたらOK
```
$ Identity added: /Users/ユーザ名/.ssh/登録したKey名 (/Users/ユーザ名/.ssh/登録したKey名)
```
[ssh-addできなかったときへの対処](https://qiita.com/sshojiro/items/60982f06c1a0ba88c160)
### **結局Push出来ないんだけど？**  
多分こっち側（リモート）が悪いから色々見とくね [確認用](https://github.com/VegetableMeat/app-mochi-match/settings/access)