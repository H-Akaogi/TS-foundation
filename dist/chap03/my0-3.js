/*
 * 自習03 合計を算出するプログラム
 */
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
export function my03_func() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(`1から100までの合計は${sum}です`);
}
/*
 * 自習03_2 3の倍数の合計・個数・平均を算出するプログラム
 */
export function my03_func2() {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            sum += i;
            count++;
        }
    }
    let average = sum / count;
    console.log(`1から100までの3の倍数の合計は${sum}です`);
    console.log(`1から100までのうち、3の倍数は${count}個です`);
    console.log(`1から100までの3の倍数の平均は${average}です`);
}
//# sourceMappingURL=my0-3.js.map