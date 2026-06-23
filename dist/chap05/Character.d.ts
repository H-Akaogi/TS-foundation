/**
 * 5-2.クラス
 * ゲームキャラクターを表現するクラス
--------------------------------
 * index.ts
import { Character } from "./chapter05/Character.js";
* インスタンスの生成例

// 1. 勇者という「実体」を作る
const hero = new Character("勇者", 100);

// 2. 魔王という「別の実体」を作る
const boss = new Character("魔王", 500);

// それぞれ独立しているので、片方のHPが減っても、もう片方には影響しない
hero.takeDamage(20);
console.log(hero.hp); // 80
console.log(boss.hp); // 500 (魔王は無傷！)
 */
export declare class Character {
    /**
     * 内部保持用の変数名は慣習に従い「_」を付ける
     */
    private _name;
    private _hp;
    private _skills;
    /**
     * _nameのゲッター
     */
    get name(): string;
    /**
     * _hpのゲッター
     */
    get hp(): number;
    /**
     * _hpのセッター
     */
    set hp(value: number);
    /**
     * _skillsのゲッター
     */
    get skills(): string[];
    /**
     * コンストラクタ
     * @param name 名前
     * @param hp 体力
     */
    constructor(name: string, hp: number);
    /**
     * 自己紹介をするメソッド
     * functionキーワードはつけない
     */
    introduce(): void;
    /**
     * ダメージを受けるメソッド
     * functionキーワードはつけない
     * @param damage ダメージ
     */
    takeDamage(damage: number): void;
    /**
     * 攻撃をするメソッド
     */
    attack(): void;
}
//# sourceMappingURL=Character.d.ts.map