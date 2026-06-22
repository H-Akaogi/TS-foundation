/*
 * 自習04 素数判定プログラム
 */
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
export function my04_func() {
    let result = true;
    for (let i = 1; i <= 100; i++) {
        result = true;
        if (i === 1) {
            result = false;
        }
        else {
            for (let a = 2; a < i; a++) {
                switch (i % a) {
                    case 0:
                        result = false;
                        break;
                }
                if (result === false) {
                    break;
                }
            }
            if (result === true) {
                console.log(`${i}は素数です`);
            }
        }
    }
}
export function my04_func2() {
    const input = prompt(`何まで計算しますか-> `);
    const max = Number(input);
    let hasPrime = false;
    let isPrime = true;
    for (let i = 1; i <= max; i++) {
        isPrime = true;
        if (i === 1) {
            isPrime = false;
        }
        else {
            for (let a = 2; a < i; a++) {
                if (i % a === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime === true) {
                console.log(`${i}は素数です`);
                hasPrime = true;
            }
        }
    }
    if (hasPrime === false) {
        console.log(`1から${max}の間に素数は存在しません`);
    }
}
//# sourceMappingURL=my0-4.js.map