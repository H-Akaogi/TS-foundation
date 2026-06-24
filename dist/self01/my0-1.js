/*
 * 自習01 3の倍数と5の倍数を分類するプログラム
 */
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
export function my01_func() {
    for (let a = 1; a <= 100; a++) {
        if (a % 3 === 0 && a % 5 === 0) {
            console.log(`${a}:3の倍数かつ5の倍数`);
        }
        else if (a % 3 === 0) {
            console.log(`${a}:3の倍数`);
        }
        else if (a % 5 === 0) {
            console.log(`${a}:5の倍数`);
        }
        else {
            console.log(a);
        }
    }
}
//# sourceMappingURL=my0-1.js.map