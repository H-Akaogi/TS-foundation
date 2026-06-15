/*
 * 演習3-8 switch～case文の機能を確認する-②
 */
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
export function ex38_func() {
    const input = prompt("値を入力してください->");
    const value = parseInt(input);
    let message = "";
    switch (true) {
        case (value > 0):
            message = "正の値です。";
            break;
        case (value === 0):
            message = "ゼロです。";
            break;
        case (value < 0):
            message = "負の値です。";
            break;
    }
    console.log(message);
}
//# sourceMappingURL=ex3-8.js.map