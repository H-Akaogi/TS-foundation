import { calculate } from "./chap04/ex4-5.js";

calculate(10, 20, (result: number) => {
    console.log(`🧮 計算結果は ${result} です！`);
});