# セクション２ JavascriptによるHTMLの生成
セクション２では，JavascriptでHTMLを生成し，リストや表を作る方法を学びます．

## タグの中身を書き換える（innerHTML）

document.getElementById('xx')で取得したタグの中身を書き換えることができます．
```
document.getElementById('xx').innerHTML = 'hello, world';
```
document.getElementById('xx')で取得したタグの中身を.innerHTMLで取得したり，書き換えたりすることができます．

### hint
先週習ったテキストフィールドの書き換えでは，valueの属性値を書き換えたので，
```
document.getElementById('xx').value = 'xx';
```

という記述になりました．タグの中身を書き換える場合はinnerHTMLを使います．
間違えやすいので注意．

### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            document.getElementById('hello').${innerHTML} = 'hello, world!'
        }
    </script>
</head>

<body>
    <h1 id="hello">Title</h1>
    <button onclick="buttonAPressed()">A</button>
</body>

</html>
```

## リスト（箇条書き）の要素を加える

innerHTMLにセットする文字列には，HTMLを含めることができます．
```
document.getElementById('xx')
    .innerHTML = '<li>りんご</li>'
```

### hint

番号なしリストはulタグ，リストの要素は，liタグを使うのでしたね．

### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            document.getElementById('fruits').innerHTML
             = '${<li>}りんご${</li>}';
        }
    </script>
</head>

<body>
    <h1>箇条書き</h1>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <${ul} id="fruits">
    </${ul}>        
</body>

</html>
```

## 複数の要素を加える

複数の要素を加えるには，まず
```
var html = '';
```
で，文字列型の変数を用意して，
```
html = html + 'つなげたい文字列';
```
というプログラムを書くことで，文字列を次々に連結していきます．

最後に，innerHTML属性を使うことで，作られた文字列を指定されたidのタグにセットします．

### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            ${var html} = '';
            html = html + '<li>りんご</li>';
            html = html + '<li>みかん</li>';
            html = html + '<li>いちご</li>';
            document.getElementById('fruits').innerHTML = html;
        }
    </script>
</head>

<body>
    <h1>箇条書き</h1>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <ul id="fruits">
    </ul>
</body>

</html>
```

## 繰り返しプログラムで要素を加える

文字列を連結してHTML出力する方法がわかったら，
応用として，繰り返しプログラムでタグを生成してみましょう．

先程と同様に
```
var html = '';
```
で，文字列型の変数を用意し，繰り返しの中で
```
html = html + '<li>' + i + '</li>';
```
というプログラムを書くことで，数を数えるプログラムを作ることができます．

### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            ${var html} = '';
            for (var i = 1; i <= 10; i++) {
                html = html + '${<li>}' + ${i} + '</li>';
            }
            document.getElementById('fruits').innerHTML = html;
        }
    </script>
</head>

<body>
    <h1>箇条書き</h1>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <ul id="fruits">
    </ul>
</body>

</html>
```

## ボタンを押すたびに要素を追加する

先程までのプログラムでは，var html = ''で文字列を初期化して，HTMLを生成していたので，ボタンを複数回押しても，出力される文字列は同様でしたが，一行目を次のように書き換えて
```
var html = document
    .getElementById('fruits').innerHTML;
```
ボタンを押すたびに追記されるように改造することができます．

### tips
ボタンBが押されたときの処理では，appendChildを使った別の書き方の例を載せてあります．
```
var li = document.createElement('li');
li.innerHTML = 'めろん';
document.getElementById('fruits').appendChild(li);
```

### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            ${var html} = document.getElementById('fruits').${innerHTML};
            html = html + '<li>めろん</li>';
            document.getElementById('fruits').innerHTML = html;
        }
        function buttonBPressed() {
            var li = document.createElement('li');
            li.innerHTML = 'めろん';
            document.getElementById('fruits').appendChild(li);
        }
    </script>
</head>

<body>
    <h1>箇条書き</h1>
    <button onclick="buttonAPressed()">A</button>
    <button onclick="buttonAPressed()">B</button>
    <hr>
    <ul id="fruits">
    </ul>
</body>

</html>
```

## テキストフィールドから入力したものをリストに追加する

これまでの応用で，テキストフィールドから入力されたものをリストに追加するプログラムを作ることができます．


### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            var fruit = document.getElementById('input-fruit').value;
            var html = document.getElementById('fruits').innerHTML;
            html = html + '<li>' + ${fruit} + '</li>';
            document.getElementById('fruits').innerHTML = html;
            document.getElementById('input-fruit').value = '';
        }
    </script>
</head>

<body>
    <h1>箇条書き</h1>
    <input id="input-fruit" type="text">
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <ul id="fruits">
    </ul>
</body>

</html>
```

## 表の生成

tableタグの中身を生成することで，表を生成することもできます．

表の一行はtrタグ，セルはtdタグで表現します．

### tips
ここでは，HTML部でtableタグを用意するのではなく，divタグを用意して，divタグの中身を生成するプログラムの最中で，tableタグを生成しています．この場合はどちらでも良いのですが，divタグを指定することによりより汎用的なプログラムを作ることができます．

### main(index.html)

```
<html>

<head>
    <script>
        function buttonAPressed() {
            var html = '';
            html = html + '<table border="1">';
            html = html + '<tr>';
            html = html + '<td>国語</td>';
            html = html + '<td>100</td>';
            html = html + '</tr>';
            html = html + '<tr>';
            html = html + '<td>算数</td>';
            html = html + '<td>90</td>';
            html = html + '</tr>';
            html = html + '</table>';
            document.getElementById('${table1}').innerHTML = html;
        }
    </script>
</head>

<body>
    <h1>表</h1>
    <button onclick="buttonAPressed()">A</button>
    <hr>
    <div id="table1"></div>
</body>

</html>
```

