// prompt-syncをインポートする
import PromptSync from "prompt-sync";
// ユーザー入力を受け取るための準備(sigint: trueはCtrl+C で終了できるようにする設定）
const prompt = PromptSync({ sigint: true });
// chap04フォルダのex4-1.jsから、calcPrice関数を読み込む
import { calcPrice } from "./chap04/ex4-3.js";

// キー入力された値を取得する
let value: string = prompt(`金額を入力してください-> `);
// 文字列を数値に変換する
const price = parseInt(value);
// キー入力された値を取得する
value = prompt("値引き率(0~0.9)を入力してください-> ");
const discountRate = parseFloat(value);

console.log(`金額; ${price}`);
if (discountRate === 0) {
    console.log(`値引き率:${0.2}`);
    console.log(`値引き後金額:${calcPrice(price)}`);
}
else {
    console.log(`値引き率:${discountRate}`);
    console.log(`値引き後金額:${calcPrice(price, discountRate)}`);
}