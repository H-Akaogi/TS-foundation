import { Result } from "./chap06/Result.js";
// 文字列型を指定してインスタンス化
const stringResult = new Result(true, "送信成功");
console.log(`メッセージ: ${stringResult.data} (長さ: ${stringResult.data.length})`);
// 数値型を指定してインスタンス化
const numberResult = new Result(true, 200);
console.log(`ステータス: ${numberResult.data} (小数点2位: ${numberResult.data.toFixed(2)})`);
//# sourceMappingURL=index.js.map