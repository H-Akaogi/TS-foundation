/*
 * 自習03 合計を算出するプログラム
 */
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
export function my03_func() {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        sum += i;
    }
    console.log(`1から100までの合計は${sum}です`);
}
//# sourceMappingURL=my0-3.js.map