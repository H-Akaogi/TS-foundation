/** 期待される実行例：
showFormattedNames(["tanaka", "suzuki"], name => name.toUpperCase());
// TANAKA
// SUZUKI

showFormattedNames(["tanaka", "suzuki"], name => `${name}さん`);
// tanakaさん
// suzukiさん
*/
import { showFormattedNames } from "./my/my0-5.js";
showFormattedNames(["tanaka", "suzuki"], name => name.toUpperCase());
showFormattedNames(["tanaka", "suzuki"], name => `${name}さん`);
