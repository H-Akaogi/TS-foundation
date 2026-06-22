/*
 * 自習02 奇数と偶数を判定するプログラム
 * 追加：合計と個数も算出する
 */
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
export function my02_func() {
    let evenCount = 0;
    let evenSum = 0;
    let oddCount = 0;
    let oddSum = 0;
    for (let a = 1; a <= 100; a++) {
        if (a % 2 === 0) {
            console.log(`${a}:偶数`);
            evenCount++;
            evenSum += a;
        }
        else {
            console.log(`${a}:奇数`);
            oddCount++;
            oddSum += a;
        }
    }
    console.log(`偶数の合計は${evenSum}、個数は${evenCount}です`);
    console.log(`奇数の合計は${oddSum}、個数は${oddCount}です`);
}
//# sourceMappingURL=my0-2.js.map