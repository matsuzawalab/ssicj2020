# セクション３ 応用編
セクション３では，HTML生成に関する２つの応用プログラムを学びます．

## プルダウンメニュー

プルダウンメニューを作成するには，selectタグを使います．
```
<select id="input-repeatnum">
    <option value="10">10回</option>
    <option value="15">15回</option>
</select>
```
selectタグの中のoptionタグで，選択肢を指定します．
value属性は，その選択した選択されたときに取得される値（.valueで取得できる属性）
で，optionタグの中身（10回，15回など）は，画面に表示されるテキストです．

選択された選択肢の値は，Javascriptからは次のようなプログラムで取得することができます．
```
var n = document
    .getElementById('xx').value;
```
テキストフィールドと同様の方法です．

### hint
このプログラムは，プルダウンメニューで指定された回数分，数を数えるプログラムです．

### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            var n = document.getElementById('input-repeatnum').value;
            n = Number(n);
            var html = '';
            for (var i = 1; i <= ${n}; i++) {
                html = html + '<li>' + ${i} + '</li>';
            }
            document.getElementById('list1').innerHTML = html;
        }
    </script>
</head>

<body>
    <h1>１からNまでの数字を数えるプログラム</h1>
    数える回数（N）：
    <select id="input-repeatnum">
        <option value="10">10回</option>
        <option value="15">15回</option>
        <option value="20">20回</option>
    </select>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <ul id="list1"></ul>
</body>

</html>
```

## 合計を求める

前の例題について，１からNまで数えるだけでなく，その数字までの総和を求めるプログラムに改造してみましょう．

９行目で，
```
var sum = 0;
```
と，総和を保存しておく変数を用意しておき，

１１行目で
```
sum = sum + i;
```
と，保存してある総和に，今数えている数(iに保存されている)を加算します．

### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            var n = document.getElementById('input-repeatnum').value;
            n = Number(n);
            var html = '';
            ${var sum = 0;}
            for (var i = 1; i <= n; i++) {
                ${sum = sum + i;}
                html = html + '<li>' + sum + '</li>';
            }
            document.getElementById('list1').innerHTML = html;
        }
    </script>
</head>

<body>
    <h1>１からNまでの総和を求めるプログラム</h1>
    求める回数（N）：
    <select id="input-repeatnum">
        <option value="10">10回</option>
        <option value="15">15回</option>
        <option value="20">20回</option>
    </select>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <ul id="list1"></ul>
</body>

</html>
```

