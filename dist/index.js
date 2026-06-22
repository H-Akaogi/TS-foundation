// prompt-syncをインポートする
import PromptSync from "prompt-sync";
// ユーザー入力を受け取るための準備(sigint: trueはCtrl+C で終了できるようにする設定）
const prompt = PromptSync({ sigint: true });
// chap04フォルダのex4-1.jsから、calcPrice関数を読み込む
import { calcPrice } from "./chap04/ex4-2.js";
// キー入力された値を取得する
let value = prompt(`金額を入力してください-> `);
// 文字列を数値に変換する
const price = parseInt(value);
// キー入力された値を取得する
value = prompt("値引き率(0.1~0.9)を入力してください-> ");
const discountRate = parseFloat(value);
// 指定された率の値引きをした金額を計算する
const discountPrice = calcPrice(price, discountRate);
console.log(`金額; ${price}`);
console.log(`値引き率:${discountRate}`);
console.log(`値引き後金額: ${discountPrice}`);
//# sourceMappingURL=index.js.map