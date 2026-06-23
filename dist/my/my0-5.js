/*
自習05_1：メッセージを加工して表示する
-------------------------------
* 問題：文字列を受け取り、加工して表示する関数を作成してください。
-------------------------------
* 期待される実行例
showMessage("hello", text => text.toUpperCase());
// HELLO
showMessage("hello", text => `*** ${text} ***`);
// *** hello ***
*/
// export function...ではないので注意(constを用いて、=を使う)
/**
 * 条件：
 * @param message 必須
 * @param formatter コールバック関数
 * formatter は文字列を受け取り、文字列を返す
 * formatter を使って加工した結果を console.log する
 */
export const showMessage = (message, formatter) => {
    const formattedMessage = formatter(message);
    console.log(formattedMessage);
};
/*
自習05_2：点数一覧を処理する
--------------------------------
* 問題：点数の配列を受け取り、条件に合う点数だけを表示する関数を作成してください。
--------------------------------
期待される実行例
showFilteredScores([80, 45, 90, 60], score => score >= 60);
// 80
// 90
// 60
*/
/**
 * 条件：
 * @param scores number[]
 * @param filterFunc コールバック関数
 * filterFunc は点数を受け取り、true または false を返す
 * filterFunc が true を返した点数だけ表示する
 */
export const showFilteredScores = (scores, filterFunc) => {
    for (const score of scores) // 配列の中身を取り出すときはfor...of
     {
        if (filterFunc(score)) {
            console.log(score);
        }
    }
};
/*
自習05_3：配送料を計算する
--------------------------------
* 問題：購入金額から、配送料込みの合計金額を計算する関数を作成してください。
--------------------------------
* 期待される実行例
console.log(calcTotal(3000));           // 3500
console.log(calcTotal(3000, 500, 0.1)); // 3200
console.log(calcTotal(3000, 0));        // 3000
*/
/**
 * 条件：
 * @param price 必須引数
 * @param shoppingFee デフォルト引数で 500
 * @param couponRate オプション引数
 * @returns クーポンがある場合は、商品価格に値引きを適用してから送料を足す
 */
export function calcTotal(price, shoppingFee = 500, couponRate) {
    if (couponRate === undefined) {
        return price + shoppingFee;
    }
    else {
        return price * (1 - couponRate) + shoppingFee;
    }
}
/* 自習05_4：配列の中身を変換する
--------------------------------
* 問題：数値の配列を受け取り、それぞれの値を変換して新しい配列を返す関数を作成してください。
--------------------------------
* 期待される実行例
console.log(convertNumbers([1, 2, 3], n => n * 2));
// [2, 4, 6]
console.log(convertNumbers([1, 2, 3], n => n + 10));
// [11, 12, 13]
*/
/**
 * 条件：
 * @param numbers number[]
 * @param converter コールバック関数
 * @returns converter は数値を受け取り、数値を返す
 * map を使わず、for...of で書く
 */
export const convertNumbers = (numbers, converter) => {
    // 変換後の数字を入れるための、新しい空の配列
    const results = [];
    // 配列の何番目に入れるかを管理するための変数
    let index = 0;
    for (const number of numbers) {
        // 変換した値を配列に入れる
        results[index] = converter(number);
        index++;
    }
    // 完成した新しい配列を返す
    return results;
};
/*
自習05_5：名前を整形して表示する
--------------------------------
* 問題：
名前の配列を受け取り、それぞれの名前を加工して表示する関数を作成してください。
--------------------------------
* 期待される実行例：
showFormattedNames(["tanaka", "suzuki"], name => name.toUpperCase());
// TANAKA
// SUZUKI
showFormattedNames(["tanaka", "suzuki"], name => `${name}さん`);
// tanakaさん
// suzukiさん
*/
/**
 * 条件：
 * @param names string[]
 * @param formatter コールバック関数
 * formatter は文字列を受け取り、文字列を返す
 * for...of を使う
 */
export const showFormattedNames = (names, formatter) => {
    const results = [];
    let index = 0;
    for (const name of names) {
        results[index] = formatter(name);
        console.log(results[index]);
        index++;
    }
};
/*
自習05_6：条件に合う文字列だけ表示する
--------------------------------
* 問題：
文字列の配列を受け取り、条件に合う文字列だけを表示する関数を作成してください。
--------------------------------
* 期待される実行例：
showFilteredWords(["apple", "banana", "cat"], word => word.length >= 5);
// apple
// banana
showFilteredWords(["apple", "banana", "cat"], word => word.includes("a"));
// apple
// banana
// cat
*/
/**
 * 条件：
 * @param words string[]
 * @param filterFunc コールバック関数
 * filterFunc は文字列を受け取り、boolean を返す
 * filterFunc が true を返した文字列だけ console.log する
 */
export const showFilteredWords = (words, filterFunc) => {
    for (const word of words) {
        filterFunc(word);
        if (filterFunc(word)) {
            console.log(word);
        }
    }
};
/*
自習05_7：数値を変換して合計する
--------------------------------
* 問題：
数値の配列を受け取り、それぞれの値を変換してから、合計値を返す関数を作成してください。
--------------------------------
* 条件：
第1引数 numbers は number[]
第2引数 converter はコールバック関数
converter は数値を受け取り、数値を返す
for...of を使う
戻り値は number
--------------------------------
* 期待される実行例：
console.log(sumConvertedNumbers([1, 2, 3], n => n * 2));// 12
console.log(sumConvertedNumbers([1, 2, 3], n => n + 10));// 36
*/
export const sumConvertedNumbers = (numbers, converter) => {
    let result = 0;
    for (const number of numbers) {
        result += converter(number);
    }
    return result;
};
/*
自習05_8：税込価格の一覧を作る
--------------------------------
* 問題：
税抜価格の配列を受け取り、税込価格の配列を返す関数を作成してください。
--------------------------------
* 条件：
第1引数 prices は number[]
第2引数 taxRate はデフォルト引数で 0.1
map は使わず、for...of を使う
push は使わず、index を使って配列に入れる
戻り値は number[]
--------------------------------
* 期待される実行例：
console.log(calcTaxIncludedPrices([1000, 2000, 3000]));
// [1100, 2200, 3300]

console.log(calcTaxIncludedPrices([1000, 2000, 3000], 0.08));
// [1080, 2160, 3240]
*/
/*
自習05_9：割引後の価格一覧を作る
--------------------------------
* 問題：
価格の配列を受け取り、割引後の価格の配列を返す関数を作成してください。
--------------------------------
* 条件：
第1引数 prices は number[]
第2引数 discountRate はオプション引数
discountRate が指定されなかった場合は、元の価格をそのまま返す
push は使わず、index を使う
戻り値は number[]
--------------------------------
* 期待される実行例：
console.log(calcDiscountPrices([1000, 2000, 3000]));
// [1000, 2000, 3000]

console.log(calcDiscountPrices([1000, 2000, 3000], 0.2));
// [800, 1600, 2400]
*/
/*
自習05_10：条件に合う数値だけ変換する
--------------------------------
* 問題：
数値の配列を受け取り、条件に合う数値だけ変換して表示する関数を作成してください。
--------------------------------
* 条件：
第1引数 numbers は number[]
第2引数 filterFunc はコールバック関数
第3引数 converter はコールバック関数
filterFunc が true を返した数値だけ converter で変換して console.log する
--------------------------------
* 期待される実行例：
showConvertedFilteredNumbers(
    [10, 20, 30, 40],
    n => n >= 25,
    n => n * 2
);
// 60
// 80

showConvertedFilteredNumbers(
    [1, 2, 3, 4, 5],
    n => n % 2 === 0,
    n => n + 100
);
// 102
// 104
*/ 
//# sourceMappingURL=my0-5.js.map