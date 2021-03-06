# タイマーとcanvasを使ったアニメーションの作成
本章では，タイマーとcanvasを使って図形を動かすアニメーションを作成する方法を学びます．

## 四角形を動かすアニメーション

タイマーとcanvasを使って，図形を動かすアニメーションを作ることができます．
tick()関数は，20ミリ秒ごとに呼ばれる関数で，この中で，毎回キャンパスを書き換えます．
毎回，少しずつ図形を動かしながら書くことで，物体が動いているように見えるアニメーションを作ることができます．

<div code src='9-1'></div>

アニメーションを作るには，物体の位置を記憶しておく必要があるため，座標を記憶するグローバル変数を作成します．
```
var x = 10;
var y = 10;
```

20ミリ秒ごとに実行されるtick()関数では，毎回
```
x = x + 2;
```
というプログラムでxを2増やした後

```
ctx.strokeRect(x, y, 10, 10);
```
で，増やされたx変数の値を使ってx座標の位置に四角形を記述します．結果的に毎回，2ピクセルずつx座標を右に動かして描画します．これをタイマーで繰り返すと，物体が右に動いているように見えます．


## 四角形を動かすアニメーション（キャンパス外に出てしまった場合の処理）

先のプログラムでは，四角形は右に動いていきますが，やがてキャンパス右外に出てしまいます．
キャンパス右橋と左端をつないで，右外に出た場合には左から入ってくるようにしてみましょう．

<div code src='9-2'></div>

tick()関数で，x座標を増やしたときに，x座標がキャンバスサイズ(今回は400)より大きい場合を調べて，大きくなった場合にはx座標を0に戻すプログラムを次のように書きます．

```
if (x > 400) {
    x = 0;
}
```

## パラパラ漫画アニメーション

タイマーを利用して，画像を次々と書き換えることもできます．これによってパラパラ漫画の要領でアニメーションを作ることができます．このプログラム例はじゃんけんのグー，チョキ，パーを切り替えるアニメーションです．

<div code src='9-3'></div>

現在の画像番号を保持する変数xをグローバル変数に定義します．
```
var x = 1;
```

3枚の画像があるため，変数は1, 2, 3と書き換えるようにします．
```
if (x <= 2) {
    x = x + 1;
} else {
    x = 1;
}
```

