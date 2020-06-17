# ボタンとJavaScriptの連携
本章では，htmlボタンの作り方とJavaScriptの基本を学びます．

## ボタンを作る

htmlを使ってボタンを作るには，buttonタグを使います．
```
<button>[ボタンのラベル]</button>
```

<div code src='1-1'></div>

## Javascriptを埋め込む

htmlにJavascriptプログラムを埋め込むには，scriptタグを使います．

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

ボタンが押されたときにJavascriptプログラムを動かすようにするには，buttonタグの属性onclickに関数名を指定します．
```
<button onclick="a()">A</button>
```

<div code src='1-3'></div>

### tips
プログラムが完成したら，ボタンを押してみよう．
window.alert("メッセージ")命令は，ダイアログにメッセージを出力します．
なお，タートルではないJavascriptでは，print()命令は使えません．

## ボタンを２つ作る

ボタンを２つ作ることもできます．

<div code src='1-4'></div>

## おみくじ

タートルではないJavascriptでは，random()関数は使えません．
代わりに，Math.random()関数を使います．
Math.random()関数は，0以上1未満の小数を生成し，戻り値として返します．

したがって，例えば0〜3までの数字を生成したければ
```
var x = Math.floor(Math.random() * 4)
```
1〜6までの数字を生成したければ
```
var x = Math.floor(Math.random() * 5) + 1
```
というようにプログラムします．

<div code src='1-5'></div>


