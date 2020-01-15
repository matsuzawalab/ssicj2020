# セクション２ canvas入門
セクション２では，canvasの基本的な使い方を学びます．

## canvasをつくり，四角形を書く

canvasタグ（要素）は，そこにJavascriptプログラムを使って図形や文字を書いたり，画像を描画することができるHTMLの要素です．
canvasタグで，キャンパスを作ります．大きさを指定し，Javascriptから読み書きできるようにidをつけ，見分けがつくようにボーダー線をつけます．
```
<canvas id="canvas1" width="400" height="300" style="border: solid 1px;"></canvas>
```

プログラムでは，１行目で，
```
var ctx = document.getElementById('canvas1').getContext('2d');
```
おなじみのgetElementById()関数を使い，idを指定して要素を取得し，2Dで書き込めるcontextオブジェクトを取得し，ctx変数に格納します．この行は，canvasに書き込むプログラムを作るときに毎回書くおまじないと思ってください．

次の行で，背景を塗りつぶします．前回になにか書いたものがあればこの行で消されます．
ボタンが押されるたびにcanvasに追記していきたい場合はこの行を削除します．
```
ctx.clearRect(0, 0, 400, 300);
```

枠線と塗りつぶしの色を決めます．
```
ctx.strokeStyle = '#0000FF'; //枠線の色は青
ctx.fillStyle = '#FF0000'; //塗りつぶしの色は赤
```            

strokeRect(x, y, w, h)関数は，x, y座標を基点に，幅w, 高さhの四角形を描画します．fillRectは塗りつぶしの四角形を描画します．
```    
ctx.strokeRect(200, 80, 100, 50);
ctx.fillRect(20, 40, 50, 100);
```    

### main(index.html)

```
<html>

<head>
    <script>

        function buttonAPressed() {
            var ctx = document.getElementById('${canvas1}').getContext('2d');
            ctx.clearRect(0, 0, 400, 300);

            ctx.strokeStyle = '#0000FF';
            ctx.fillStyle = '#FF0000';

            ctx.strokeRect(200, 80, 100, 50);
            ctx.fillRect(20, 40, 50, 100);
        }

    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <${canvas} id="canvas1" width="400" height="300" style="border: solid 1px;"></canvas>
</body>

</html>
```

## 円を書く

円を書くには，まず，
```    
ctx.beginPath();
```
でパス（図形を描画するとき一つ一つの動作でできる要素のことをパスと呼びます）を初期化します．

次に，
```    
ctx.arc(100, 100, 50, 0, Math.PI * 2);
```
で，円弧を書きます．引数は(x, y, 半径, 開始角度(ラジアン), 終了角度(ラジアン))です．上記の例では，座標（100, 100）を中心に，半径50の円を書きます．

最後に，
```
ctx.stroke();
```
で，パスを終了し，図形を描画します．

円弧ではなく，塗りつぶすには
```
ctx.fill();
```
で，パスを終了し，図形を描画します．

### hint
180°はラジアンでπ，360°はラジアンで２πとなります．

### main(index.html)

```
<html>

<head>
    <script>

        function buttonAPressed() {
            var ctx = document.getElementById('canvas1').getContext('2d');
            ctx.clearRect(0, 0, 400, 300);

            ctx.strokeStyle = '#0000FF';
            ctx.fillStyle = '#FF0000';

            ctx.beginPath();
            ctx.${arc}(100, 100, 50, 0, Math.PI * 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(200, 100, 50, 0, Math.PI * 2);
            ctx.fill();
        }

    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <canvas id="canvas1" width="400" height="300" style="border: solid 1px;"></canvas>
</body>

</html>
```

## 線を書く

線を書くには，まずbeginPath();でパスを初期化し，

始点を
```
ctx.moveTo(100, 100);
```
で設定し，終点を
```
ctx.lineTo(200, 200);
```
で設定します．

最後に，
```
ctx.stroke();
```
で，パスを終了し，線を描画します．

lineToを２回以上呼び出して，３角形以上の多角形ができる場合には，始点と終点をつなぎ，多角形を作ります．

### main(index.html)

```
<html>

<head>
    <script>

        function buttonAPressed() {
            var ctx = document.getElementById('canvas1').getContext('2d');
            ctx.clearRect(0, 0, 400, 300);

            ctx.strokeStyle = '#0000FF';
            ctx.fillStyle = '#FF0000';

            //100, 100から200, 200 へ線を引く
            ctx.${beginPath()};
            ctx.${moveTo}(100, 100);
            ctx.${lineTo}(200, 200);
            ctx.${stroke}();

            //３点を頂点とする三角形を描画する
            ctx.beginPath();
            ctx.moveTo(200, 200);
            ctx.lineTo(250, 100);
            ctx.lineTo(300, 200);
            ctx.closePath();
            ctx.stroke();
        }

    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <canvas id="canvas1" width="400" height="300" style="border: solid 1px;"></canvas>
</body>

</html>
```

## 文字列を描画する

文字列を描画するには，

```
ctx.font = "30px sans-serif";
```
で，フォントとその大きさを指定した後，

```
ctx.fillText("hello, world!", 20, 75, 200);
```
で，文字列を書き込みます．引数は(表示する文字列, x座標, y座標, 最大幅)です．

抜き文字を描画したい場合は，
```
ctx.strokeText("hello, world!", 20, 175, 200);
```
で描画します．

### main(index.html)

```
<html>

<head>
    <script>

        function buttonAPressed() {
            var ctx = document.getElementById('canvas1').getContext('2d');
            ctx.clearRect(0, 0, 400, 300);

            ctx.${font} = "30px sans-serif";
            ctx.${fillText}("hello, world!", 20, 75, 200);            
            ctx.strokeText("hello, world!", 20, 175, 200);
        }

    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <canvas id="canvas1" width="400" height="300" style="border: solid 1px;"></canvas>
</body>

</html>
```

## 画像を描画する

画像を描画するには，まず，グローバル変数として，画像オブジェクトを生成し，ファイル名を指定して画像を読み込みます．
この書き方も，意味は完全にわからなくて構いませんので，最初はこう書くものだと覚えてください．

```
var img01 = new Image();
img01.src = "goo.png";
```

読み込んだ画像をキャンパスに描くには，buttonAPressed関数内で，

```
ctx.drawImage(img01, 10, 10, 100, 100);
```
と記述し描画します．引数は(画像オブジェクト, x座標, y座標, 幅，高さ)です．

### main(index.html)

```
<html>

<head>
    <script>

        var img01 = new Image();
        img01.src = "goo.png";

        function buttonAPressed() {
            var ctx = document.getElementById('canvas1').getContext('2d');
            ctx.clearRect(0, 0, 400, 300);

            ctx.${drawImage}(img01, 10, 10, 100, 100);
        }

    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <canvas id="canvas1" width="400" height="300" style="border: solid 1px;"></canvas>
</body>

</html>
```

### files

- [goo.png](src/goo.png)
