import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
import { discountPrice } from "./chap04/ex4-4.js";

let value: string = prompt(`金額を入力してください-> `);
const price = parseInt(value);

value = prompt(`値引き率(0.1-0.9)を入力して下さい-> `);
const discountRate = parseFloat(value);

console.log(`金額:${price}`);
console.log(`値引き率:${discountRate}`);
const result = discountPrice(price, discountRate);
console.log(`値引き後金額:${result}`);