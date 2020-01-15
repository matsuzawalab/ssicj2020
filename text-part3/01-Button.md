
# セクション1 ボタンとJavaScriptの連携
セクション１では，htmlボタンの作り方とJavaScriptの基本を学びます．

## ボタンを作る

htmlを使ってボタンを作るには，buttonタグを使います．
```
<button>[ボタンのラベル]</button>
```

```{#lst:1-1 .javascript .numberLines caption="家を書くサンプルプログラム"}
<html>
    <head>
    </head>
    <body>
        <${button}>A</${button}>
    </body>
</html>
```

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

```{#lst:1-1 .javascript .numberLines caption="家を書くサンプルプログラム"}
<html>
    <head>
        <${script}>
            function a(){
                window.alert('hello, world');
            }
        <${\/script}>
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

```{#lst:1-1 .javascript .numberLines caption="家を書くサンプルプログラム"}
<html>
    <head>
        <script>
            function a(){
                window.alert('hello, world');
            }
        </script>
    </head>
    <body>
        <button ${onclick}="${a()}">A</button>
    </body>
</html>
```

### tips
プログラムが完成したら，ボタンを押してみよう．
window.alert("メッセージ")命令は，ダイアログにメッセージを出力します．
なお，タートルではないJavascriptでは，print()命令は使えません．


## ボタンを２つ作る

ボタンを２つ作ることもできます．

```{#lst:1-1 .javascript .numberLines caption="家を書くサンプルプログラム"}
<html>
    <head>
        <script>
            function a(){
                window.alert('A!');
            }
            function b(){
                window.alert('B!');
            }            
        </script>
    </head>
    <body>
        <button onclick="${a()}">A</button>
        <button onclick="${b()}">B</button>
    </body>
</html>
```

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

```{#lst:1-1 .javascript .numberLines caption="家を書くサンプルプログラム"}
<html>
    <head>
        <script>
            function a(){
                //0, 1の乱数を生成する
                var x = Math.floor(${Math.random()} * ${2})
                if(x == 0){
                    window.alert('あたり！');
                }else{
                    window.alert('はずれ．');
                }
            }         
        </script>
    </head>
    <body>
        <h1>おみくじプログラム</h1>
        <button onclick="a()">A</button>
    </body>
</html>
```


