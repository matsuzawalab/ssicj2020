# セクション1 JavascriptファイルとHTMLファイルの分離
セクション１では，JavascriptファイルとHTMLファイルの分離の方法について学びます．

## Javascriptファイルを分離する．

HTML記述とJavascript記述が混在すると，複雑でエラーの原因ともなるため，HTMLファイルとJavascriptファイルを分離することができます．

HTMLファイルと同じフォルダに，Javascriptを記述したファイル（この場合は"ex0.js"）というファイルを作ります．

HTMLファイルでは，scriptタグにsrc属性でJavascriptが記述されたファイルを指定します．scriptタグの中身は何も記述せずにタグを閉じます．
```
<script src="[Javascriptファイル名]"></script>
```

### main(index.html)

```
<html>
    <head>
        <script ${src="ex0.js"}></script>
    </head>
    <body>
        <button onclick="buttonAPressed()">A</button>
    </body>
</html>
```

### files

- [ex0.js](src/ex0.js)
