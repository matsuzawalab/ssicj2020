# ボタンとJavascriptの連携

第３部では初学者用Webページ開発環境（pikeplace - kenya）を使って，HTMLとJavascriptを使い，ブラウザで動くプログラムを作ることを学習します．

本章では，htmlとJavascriptの基本を学びます．

## ボタンを作る

htmlを使ってボタンを作るには，buttonタグを使います．
```
<button>[ボタンのラベル]</button>
```

<div code src='1-1'></div>

まだ，ボタンを押しても何も起こりません．

## Javascriptを埋め込む

htmlにJavascriptプログラムを埋め込むには，scriptタグを使います．
scriptタグの中にJavascriptのプログラムを書きます．

```
<html>

<head>
    <script>
        [Javascriptのプログラム]
    </script>
</head>

<body>
</body>

</html>
```

## ボタンが押されたときにJavascriptプログラムを動かす

ボタンが押されたときにJavascriptプログラムを動かすようにするには，buttonタグの属性onclickに関数呼び出しのプログラムを書き，scriptタグの中で定義している関数を呼び出します．
```
<button onclick="a()">A</button>
```

scriptタグの中には，これまでタートルグラフィックス編で学習してきたJavascriptの構文が概ね利用できますが，
タートルグラフィックスの専用命令で利用できないものもあります．利用できるものとできないものを下記にまとめました．

- 利用できるもの
    * 変数
    * 条件分岐（if文）
    * 繰り返し(while文，for文）
    * 関数呼び出し(引数，戻り値)
- 利用できないもの
    * タートルの動作に関する命令（createTurtle, fd, rtなど）
    * print, println命令
    * random命令

ここで，ボタンが押されたときにHello, world!と表示されるプログラムを作りたいのですが，タートルではないJavascriptでは，print()命令は使えません．代わりにこのプログラムでは，以下の２つの命令でメッセージを表示しています．

window.alert命令は，ダイアログにメッセージを出力します．
```
window.alert("メッセージ")
```

console.log("メッセージ")命令は，コンソールにメッセージを出力します．
```
console.log("メッセージ")
```

<div code src='1-3'></div>

### コンソールを表示する

console.log()命令で指定したメッセージを表示したり，エラーをみたりするには，ブラウザのコンソール機能を利用します．

コンソールを開くには，
<ul>
    <li>Chromeでは，<a href="https://www.javadrive.jp/javascript/console/index1.html">こちら</a>のサイトが参考になる．</li>
    <li>Safariでは，<a href="https://www.84kure.com/blog/2014/12/19/safari-javascript%E3%82%B3%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF/">こちら</a>のサイトが参考になる．</li>
</ul>

## ボタンを２つ作る

ボタンを２つ作ることもできます．異なる２つの機能を実現するために，２つの関数を用意して，２つのボタンそれぞれが機能に対応する関数を呼ぶように設計します．

<div code src='1-4'></div>

## 乱数（おみくじ）

タートルグラフィックス編でも作成したおみくじを作ってみましょう．

タートルではないJavascriptでは，random()関数は使えません．
代わりに，Math.random()関数を使います．
Math.random()関数は，0以上1未満の小数を生成し，戻り値として返します．

したがって，例えば0〜3までの数字を生成したければ
```
var x = Math.floor(Math.random() * 4)
```
1〜6までの数字を生成したければ
```
var x = Math.floor(Math.random() * 6) + 1
```
というようにプログラムします．

<div code src='1-5'></div>

<!-- ## 練習問題

### 勝率計算アプリケーション
次の動画で示すようなアプリケーションを作りなさい．

#### 動作仕様（動画）{.unnumbered}
<video src="11-1.mov" autoplay loop muted></video>

#### 仕様{.unnumbered}
<ul>
    <li>勝数と負数を入力し，計算ボタンを押すと，勝率（％）を計算し出力する．</li>
    <li>ファイル名を「winningrate.html」とすること</li>
</ul>

### BMI計算アプリケーション
次の動画で示すようなアプリケーションを作りなさい．

#### 動作仕様（動画）{.unnumbered}
<video src="11-2.mov" autoplay loop muted></video>

#### 仕様{.unnumbered}
- 身長と体重を入力し，計算ボタンを押すと，BMIを計算し出力する．
- ファイル名を「bmi.html」とすること -->


