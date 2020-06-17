# セクション1 ローカル変数とグローバル変数
セクション１では，ローカル変数とグローバル変数について学びます．

## ローカル変数

関数(function)内に定義された変数(var)は，関数内でのみ有効であることは，変数のスコープで習いました．
今回は，ボタンが何度も押される等で，関数が何度も呼ばれることを考えてみましょう．

buttonAPressed()関数内に変数xを定義し，０で初期化します．
```
var x = 0;
```

関数内で定義されたローカル変数（局所変数）は，関数の呼び出し毎に毎回保存領域が確保され，初期化され，関数が終わると消滅する呼び出し１回限り有効な変数です．したがって，ボタンを何度も押し，関数を何度実行しても，表示されるのは１のままです．

<div code src='5-1'></div>

## グローバル変数

関数(function)の外側に定義された変数(var)は，すべての関数で有効なグローバル変数（広域変数）となります．
グローバル変数はどの関数からもその値を読み書きすることができます．プログラムが読み込まれると同時に初期化されて，プログラムが終了するまで値を保持し続けます．

```
var x = 0;
```

今度のプログラムでは，ボタンを何度押しても，前回の値が保存されているので，１ずつカウントアップするプログラムを作ることができます．

<div code src='5-2'></div>

## グローバル変数（２）

グローバル変数は関数間で値を共有し，どの関数からもその値を読み書きすることができます．

```
x = 0;
```

もう一つの関数を用意して，カウントをリセットするボタンを作ることができました．

<div code src='5-3'></div>

### tips

このように，大変便利に見えるグローバル変数ですが，プログラムの保守という観点からは問題が多いので，極力控えてプログラムを作ることが推奨されています．簡単に説明すると，バグが起こったときに，ローカル変数ならばバグの範囲が限定しやすいのですが，グローバル変数が多いと，影響を与える関数（プログラム）の範囲が広大になってしまい，デバッグする範囲も広域に及びます．