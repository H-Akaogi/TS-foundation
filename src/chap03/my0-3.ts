/*
 * 自習03 合計を算出するプログラム
 */

import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

export function my03_func(): void {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(`1から100までの合計は${sum}です`)
}