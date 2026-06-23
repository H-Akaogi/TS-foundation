/*
* 期待される実行例：
showFilteredWords(["apple", "banana", "cat"], word => word.length >= 5);
// apple
// banana

showFilteredWords(["apple", "banana", "cat"], word => word.includes("a"));
// apple
// banana
// cat
*/
import { showFilteredWords } from "./my/my0-5.js";
showFilteredWords(["apple", "banana", "cat"], word => word.length >= 5);
showFilteredWords(["apple", "banana", "cat"], word => word.includes("a"));
//# sourceMappingURL=index.js.map