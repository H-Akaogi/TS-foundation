/*
 * 演習3-3 配列の機能を確認する
 */
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });
export function ex33_func() {
    let months = ["January", "February", "March"];
    console.log(`配列の長さ:${months.length}`);
    const value = prompt("月を入力してください->");
    months.push(value);
    console.log(`配列の値:${months}`);
    console.log(`配列の長さ:${months.length}`);
}
//# sourceMappingURL=ex3-3.js.map