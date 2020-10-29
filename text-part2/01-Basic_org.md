# HTMLの基本

本章では，htmlボタンの作り方とJavaScriptの基本を学びます．

## 最初のページ（最小限の構成）

<div code src='1-1'></div>

### タグ
- 文章にタグを付けて構造を表す
- タグは &lt; と &gt; でくくる
    - ```<タグ名>ここに文章が入る</タグ名>```
- 「開始タグ」と「終了(閉じ)タグ」で囲まれた範囲にタグが示す構造(要素)を適用
- 終了タグが無いものも存在

- タグにはオプション指定できるものもある
    - ```<タグ名 要素名1＝”属性A” 要素名2＝”属性B”>```

### head部でよく使うタグ
```
<meta charset="UTF-8">
<meta name="description" content="HTML練習">

<title>HTMLの練習</title>

<link rel="shortcut icon" href="myfavicon.ico">
<link rel="stylesheet" href="mystyle.css">
<script src="myscript.js"></script>
```

### コメント
```
<!-- これはコメントです -->
```

- &lt;!-- と --&gt;で囲まれた部分はコメント，解釈・表示されない

### 実体参照

<!-- | 文字           | 実体参照       | 説明            |
:--|:-:|--:
| &lt; | &amp;lt;         | 小なり記号       |
| &gt; | &amp;gt;         | 大なり記号  |
| &amp;| &amp;amp;         | アンド記号    |
| &quot;| &amp;quot;  | ダブルクォーテーション    |
: 特殊記号の表示 -->

<table class="mtable" style="margin-left: 100px;">
<tr>
    <td class="mtd">文字</td>
    <td class="mtd">実体参照</td>
    <td class="mtd" style="width: 200px;">説明</td>
</tr>
<tr>
    <td>&lt;</td><td>&amp;lt;</td><td>小なり記号</td>
</tr>
<tr>
    <td>&gt;</td><td>&amp;gt;</td><td>大なり記号</td>
</td>
<tr>
    <td>&amp;</td><td>&amp;amp;</td><td>アンド記号</td>
</tr>
<tr>
    <td>&quot;</td><td>&amp;quot;</td><td>ダブルクォーテーション</td>
</tr>
</table>

<div code src='1-2'></div>
```

```

見出しは h1（大見出し） から h6（小見出し） まで
パラグラフは&lt;p> &lt;/p>でくくる
希望位置で改行したい場合には&lt;br>を利用（閉じタグ無し）

### 画像を貼る

```<img src="test.jpg" width="180" height="240" alt="サンプル画像">```

srcにファイル名を，altには画像の説明を付ける
画像ファイルは，GIF, JPEG, PNGの形式

### リンクする

```
<p>Googleは<a href="http://google.com">こちら</a>から</p>
<p>別に作ったページは<a href="next.html">ここ</a>から</p>
```
オプション target="_blank" を付けると別ウィンドウ（タブ）で開く

### 箇条書き

```
<p>クラウドといえば</p>
<ul>
	<li>IaaS</li>
	<li>PaaS</li>
	<li>SaaS</li>
</ul>
```

### 段落番号

<div class="mytd">

```
<p>信号の色の順</p>
<ol>
	<li>青</li>
	<li>黄</li>
	<li>赤</li>
</ol>
```

</div>

<div class="mytd">
<p>信号の色の順</p>
<ol>
	<li>青</li>
	<li>黄</li>
	<li>赤</li>
</ol>
</div>

UL: Unordered List (順序のないリスト) → 箇条書きリスト
OL: Ordered List (順序のあるリスト) → 番号付きリスト
LI: List Item (リストの項目)

### 表
```
<p>売り上げ</p>
<table>
	<tr><th>支店名</th><th>2009年</th><th>2010年</th><th>2011年</th></tr>
	<tr><th>新宿支店</th><td>1000</td><td>1200</td><td>1500</td></tr>
		<tr><th>渋谷支店</th><td>800</td><td>950</td><td>1300</td></tr>
	<tr><th>横浜支店</th><td>900</td><td>1100</td><td>1200</td></tr>
</table>
```

TR: 行の指定
TH: 見出しの指定
TD: 列（データ）の指定

### その他：学習に関して
- 日常的に作業しない場合，全てのタグやオプションを覚えることは困難
 - 必要に応じて調べながら使えれば良い
- 例題の多い辞書的なサイトが参考に
 - HTMLクイックリファレンス　　　　　　　　 　http://www.htmq.com/ 
 - HTML5やCSSプロパティなど
-お手本となるサイトのソースを覗く
 - 実際のイメージから，どのように実現しているのか


