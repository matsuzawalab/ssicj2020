# セクション1 タイマー
セクション１では，タイマーの使い方を学びます．

## タイマーから一定間隔で関数を呼び出す

これまでのプログラムを動作させるには，必ずユーザがなにか操作（ボタンを押すなど）をする必要がありましたが，キッチンタイマーなど，定期的に，自動的に動作するプログラムを作るときには，時を刻むタイマーが必要になります．
Javascriptでは，setInterval関数でタイマーを起動します．

setIntervalの書法は，次の通りです．

```
setInterval([関数名], [呼び出す間隔(ミリ秒)]);
```
例えば，
```
setInterval(tick, 1000);
```
という行では，tickという関数（下に定義してありますね）を，1000ミリ秒ごと，つまり１秒毎に呼び出すタイマーを起動する，という意味になります．Aボタンを押すと，setInterval関数が実行され，タイマーが起動して１秒毎にtick関数が実行されるようになります．

### main(index.html)

```
<html>

<head>
    <script>
        var x = 0;

        function buttonAPressed() {
            ${setInterval}(tick, 1000);
        }

        function tick() {
            x = x + 1;
            document.getElementById('time').innerHTML = x;
        }
    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <p id="time">0</p>
</body>

</html>
```

## タイマーを停止する

タイマーを停止するには，
```
clearInterval([タイマー変数]);
```
関数を呼び出します．タイマー変数を記憶しておく必要があるので，グローバル変数として，
```
var timer;
```
を定義し，タイマーが起動したときに，setInterval関数の戻り値として得られるタイマー変数を記憶しておき，
```
timer = setInterval(tick, 1000);
```
clearInterval関数でタイマーを停止します．
```
clearInterval(timer);
```

### main(index.html)

```
<html>

<head>
    <script>
        var x = 0;
        var timer;

        function buttonAPressed() {
            ${timer} = setInterval(tick, 1000);
        }

        function buttonBPressed() {
            ${clearInterval(timer)};
        }

        function tick() {
            x = x + 1;
            document.getElementById('time').innerHTML = x;
        }
    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <button onclick="buttonBPressed()">B</button>
    <hr>
    <p id="time">0</p>
</body>

</html>
```

## タイマーの重複起動を回避する

一つ前のプログラムでは，タイマーの起動と停止を行うことができるようになりましたが，
何どもAボタンを押すと，タイマーがたくさん起動してしまい，停止もできなくなります（変数は一つのため，最後に起動したものしか停止できない）．

タイマーの重複起動を回避するテクニックをはいくつかあるのですが，状態変数による場合分けのプログラムを作ってみましょう．
'停止中', か'起動中'かを記憶しておく変数stateをグローバル変数として定義します;
```
var state = '停止中';
```

buttonAPressed()関数は次のように書き換えます．
```
if (state == '停止中') {
    timer = setInterval(tick, 1000);
    state = '動作中';
}
```
このプログラムは，stateが「停止中」のときだけ，タイマーを起動し，起動したらstateを「動作中」に切り替えます．

buttonBPressed()関数は次のように書き換えます．
```
function buttonBPressed() {
    if (state == '動作中') {
        clearInterval(timer);
        state = '停止中';
    }
}
```
このプログラムは，stateが「動作中」のときだけ，タイマーを停止し，停止したらstateを「停止中」に切り替えます．

### main(index.html)

```
<html>

<head>
    <script>
        var x = 0;
        var timer;
        var state = '停止中';

        function buttonAPressed() {
            if (state == '${停止中}') {
                timer = setInterval(tick, 1000);
                state = '${動作中}';
            }
        }

        function buttonBPressed() {
            if (state == '動作中') {
                clearInterval(timer);
                state = '停止中';
            }
        }

        function tick() {
            x = x + 1;
            document.getElementById('time').innerHTML = x;
        }
    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <button onclick="buttonBPressed()">B</button>
    <hr>
    <p id="time">0</p>
</body>

</html>
```

## シンプルなインターフェイスに

state変数で状態を管理できるようになると，ボタンは一つでも同様の機能を実現できることに気づきます．
AボタンとBボタンの動作について，Aボタン一つでその状態ごとに動作を分岐するようにして，Aボタンを押すたびに停止と実行を切り替えるプログラムを作ることができます．

### main(index.html)

```
<html>

<head>
    <script>
        var x = 0;
        var timer;
        var state = '停止中';

        function buttonAPressed() {
            if (${state} == '停止中') {
                timer = setInterval(tick, 1000);
                state = '動作中';
            } else if (${state} == '動作中') {
                clearInterval(timer);
                state = '停止中';
            }
        }

        function tick() {
            x = x + 1;
            document.getElementById('time').innerHTML = x;
        }
    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <p id="time">0</p>
</body>

</html>
```

## ストップウォッチ

タイマーのプログラムを応用して，ストップウォッチを作ってみましょう．
1/10秒の位と1秒の二桁の変数を用意して，100ミリ秒ごとに1/10秒の位をカウントアップし，1/10秒のくらいが10になったら，繰り上がりを実現します．

tick()関数の次のプログラムに注目しましょう．
```
oneof10sec = oneof10sec + 1;
if (oneof10sec == 10) {
    sec = sec + 1;
    oneof10sec = 0;
}
```

### main(index.html)

```
<html>

<head>
    <script>
        var sec = 0;
        var oneof10sec = 0;
        var timer;
        var state = '停止中';

        function buttonAPressed() {
            if (state == '停止中') {
                timer = setInterval(tick, 100);
                state = '動作中';
            } else if (state == '動作中') {
                clearInterval(timer);
                state = '停止中';
            }
        }

        function tick() {
            oneof10sec = oneof10sec + 1;
            if (oneof10sec == 10) {
                sec = ${sec + 1};
                oneof10sec = ${0};
            }
            document.getElementById('output-sec').innerHTML = sec;
            document.getElementById('output-oneof10sec').innerHTML = oneof10sec;
        }
    </script>
</head>

<body>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <p><span id="output-sec">0</span>:<span id="output-oneof10sec">0</span></p>
</body>

</html>
```