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
export class Character {
    // 名前を表すプロパティ(読み取り専用)
    name = "名無し";
    // 体力を表すプロパティ
    hp = 100;
    // 技の一覧を表すプロパティ
    skills = [];
    /**
     * コンストラクタ
     * @param name 名前
     * @param hp 体力
     */
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    /**
     * 自己紹介をするメソッド
     * functionキーワードはつけない
     */
    introduce() {
        console.log(`私は${this.name}。体力は残り${this.hp}です。`);
    }
    /**
     * ダメージを受けるメソッド
     * functionキーワードはつけない
     * @param damage ダメージ
     */
    takeDamage(damage) {
        this.hp -= damage; // 自分のHPを減らす
        if (this.hp < 0)
            this.hp = 0;
        console.log(`${this.name}は${damage}のダメージを受けた！`);
    }
}
//# sourceMappingURL=Character.js.map