/*
 * 演習3-5 if文の機能を確認する
 */
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
export function ex35_func() {
    const input = prompt("値を入力してください->");
    const value = parseInt(input);
    let message = "入力された値は奇数です。";
    if (value % 2 === 0) {
        message = "入力された値は偶数です。";
    }
    console.log(message);
}
//# sourceMappingURL=ex3-5.js.map