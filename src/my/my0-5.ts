/*
自習05_1：メッセージを加工して表示する
-------------------------------
* 問題：文字列を受け取り、加工して表示する関数を作成してください。
-------------------------------
* 条件：
第1引数 message は必須
第2引数 formatter はコールバック関数
formatter は文字列を受け取り、文字列を返す
formatter を使って加工した結果を console.log する
--------------------------------
* 期待される実行例
showMessage("hello", text => text.toUpperCase());
// HELLO
showMessage("hello", text => `*** ${text} ***`);
// *** hello ***
*/
// export function...ではないので注意(constを用いて、=を使う)
export const showMessage = (message: string, formatter: (text: string) => string): void => {
    const formattedMessage = formatter(message);
    console.log(formattedMessage);
}

/*
自習05_2：点数一覧を処理する
--------------------------------
* 問題：点数の配列を受け取り、条件に合う点数だけを表示する関数を作成してください。
--------------------------------
* 条件：
第1引数 scores は number[]
第2引数 filterFunc はコールバック関数
filterFunc は点数を受け取り、true または false を返す
filterFunc が true を返した点数だけ表示する
--------------------------------
期待される実行例
showFilteredScores([80, 45, 90, 60], score => score >= 60);
// 80
// 90
// 60
*/
export const showFilteredScores = (scores: number[], filterFunc: (score: number) => boolean): void => {
    for (const score of scores) // 配列の中身を取り出すときはfor...of
    {
        if (filterFunc(score)) {
            console.log(score);
        }
    }
}

/*
自習05_3：配送料を計算する
問題

購入金額から、配送料込みの合計金額を計算する関数を作成してください。

条件：

price は必須引数
shippingFee はデフォルト引数で 500
couponRate はオプション引数
クーポンがある場合は、商品価格に値引きを適用してから送料を足す
*/
/*
期待される実行例
console.log(calcTotal(3000));           // 3500
console.log(calcTotal(3000, 500, 0.1)); // 3200
console.log(calcTotal(3000, 0));        // 3000
*/

/*
自習05_4：配列の中身を変換する
問題

数値の配列を受け取り、それぞれの値を変換して新しい配列を返す関数を作成してください。

条件：

第1引数 numbers は number[]
第2引数 converter はコールバック関数
converter は数値を受け取り、数値を返す
map を使わず、for...of で書く
*/
/*
期待される実行例
console.log(convertNumbers([1, 2, 3], n => n * 2));
// [2, 4, 6]
console.log(convertNumbers([1, 2, 3], n => n + 10));
// [11, 12, 13]
*/