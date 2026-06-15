/*
 * 演習3-3 配列の機能を確認する
 */
// prompt-syncをインポートする
import promptSync from "prompt-sync";
// ユーザー入力を受け取るための準備
const prompt = promptSync({ sigint: true });
export function ex33_func() {
    // 月を表す配列を宣言する
    let months = ["January", "February", "March"];
    // 配列の長さを表示する
    console.log(`配列の長さ:${months.length}`);
    // キー入力された値を取得する
    const value = prompt("月を入力してください->");
    // 入力された月を追加する
    months.push(value);
    // 配列の値を表示する
    console.log(`配列の値:${months}`);
    // 配列の長さを表示する
    console.log(`配列の長さ:${months.length}`);
}
//# sourceMappingURL=ex3-3.js.map