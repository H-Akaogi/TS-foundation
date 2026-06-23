/**
 * 5-2.クラス
 * ゲームキャラクターを表現するクラス
--------------------------------
 * index.ts
import { Character } from "./chap05/Character.js";
const hero = new Character();
 */
export declare class Character {
    readonly name: string;
    hp: number;
    skills: string[];
    /**
     * コンストラクタ
     * @param name 名前
     * @param hp 体力
     */
    constructor(name: string, hp: number);
}
//# sourceMappingURL=Character.d.ts.map