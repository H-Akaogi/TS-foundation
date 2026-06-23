/**
 * 5-2.クラス
 * ゲームキャラクターを表現するクラス
--------------------------------
 * index.ts
import { Character } from "./chap05/Character.js";
const hero = new Character();
 */
export class Character {
    // 名前を表すプロパティ(読み取り専用)
    name = "名無し";
    // 体力を表すプロパティ
    hp = 100;
    // 技の一覧を表すプロパティ
    skills = [];
}
//# sourceMappingURL=Character.js.map