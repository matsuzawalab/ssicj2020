# セクション３ 応用編
セクション３では，canvasを使った３つの応用プログラムを学びます．

## 繰り返し図形

canvasを使ったdrawXXXなどという記述は，Javascriptプログラムですから，これ魔に習った基礎的なプログラミングテクニック(for文，if文)が応用できます．

例えば，四角形を横に並べて１０個書くには，x座標を工夫して

```
for (var i = 0; i < 10; i++) {
    ctx.strokeRect(i * 15, 50, 10, 10);
}
```
というように書くと，繰り返しを使って多くの同様の図形を書くことができます．

### main(index.html)

```
<html>

<head>
    <script>

        function buttonAPressed() {
            var ctx = document.getElementById('canvas1').getContext('2d');
            ctx.clearRect(0, 0, 400, 300);

            for (var i = 0; i < 10; i++) {
                ctx.strokeRect(${i * 15}, 50, 10, 10);
            }
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

## テキストフィールドと組み合わせる

canvasの外にあるテキストフィールドと組み合わせてプログラムを作ることもできます．

次のプログラムでは，テキストフィールドからx座標とy座標の入力を受け取り，その場所に四角形を描いています．

### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            var ctx = document.getElementById('canvas1').getContext('2d');
            ctx.clearRect(0, 0, 400, 300);

            var x = document.getElementById('x').value;
            x = Number(x);
            var y = document.getElementById('y').value;
            y = Number(y);

            ctx.strokeRect(${x}, ${y}, 10, 10);
        }

    </script>
</head>

<body>
    X:<input id="x" type="text" value="0">Y:<input id="y" type="text" value="0">
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <canvas id="canvas1" width="400" height="300" style="border: solid 1px;"></canvas>
</body>

</html>
```


## じゃんけんプログラム

canvasの画像描画を応用して，じゃんけんプログラムを作ってみましょう．
グー，チョキ，パーの画像を用意して，乱数を使い，どの手を出すのかを決めて，その画像を表示します．

### main(index.html)

```
<html>

<head>
    <script>

        var img01 = new Image();
        img01.src = "goo.png";
        var img02 = new Image();
        img02.src = "choki.png";
        var img03 = new Image();
        img03.src = "pa.png";

        function buttonAPressed() {
            var ctx = document.getElementById('canvas1').getContext('2d');
            ctx.clearRect(0, 0, 400, 300);

            var x = Math.floor(Math.${random}() * 3) + 1;
            if (x == 1) {
                ctx.drawImage(img01, 10, 10, 100, 100);
            } else if (x == 2) {
                ctx.drawImage(img02, 10, 10, 100, 100);
            } else if (x == 3) {
                ctx.drawImage(img03, 10, 10, 100, 100);
            }
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
- [choki.png](src/choki.png)
- [pa.png](src/pa.png)

