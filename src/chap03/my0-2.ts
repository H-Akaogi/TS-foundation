/*
 * 自習02 奇数と偶数を判定するプログラム
 */

import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

export function my02_func(): void {
    for (let a = 1; a <= 100; a++) {
        if (a % 2 === 0) {
            console.log(`${a}:偶数`);
        }
        else {
            console.log(`${a}:奇数`);
        }
    }
}