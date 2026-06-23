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
    /**
     * 内部保持用の変数名は慣習に従い「_」を付ける
     */
    // 名前を表すプロパティ(読み取り専用)
    private _name: string = "名無し";
    // 体力を表すプロパティ
    private _hp: number = 100;
    // 技の一覧を表すプロパティ
    private _skills: string[] = [];

    /**
     * _nameのゲッター
     */
    get name(): string {
        return this._name;
    }

    /**
     * _hpのゲッター
     */
    get hp(): number {
        return this._hp;
    }

    /**
     * _hpのセッター
     */
    set hp(value: number) {
        // セッターの中で値のチェックを行う
        if (value < 0) {
            this._hp = 0;
        } else {
            this.hp = value;
        }
    }

    /**
     * _skillsのゲッター
     */
    get skills(): string[] {
        return this._skills;
    }

    /**
     * コンストラクタ
     * @param name 名前
     * @param hp 体力
     */
    constructor(name: string, hp: number) {
        this._name = name;
        this._hp = hp;
    }

    /**
     * 自己紹介をするメソッド
     * functionキーワードはつけない
     */
    introduce(): void {
        console.log(`私は${this._name}。体力は残り${this._hp}です。`);
    }

    /**
     * ダメージを受けるメソッド
     * functionキーワードはつけない
     * @param damage ダメージ
     */
    takeDamage(damage: number): void {
        this._hp -= damage; // 自分のHPを減らす
        if (this._hp < 0) this._hp = 0;
        console.log(`${this._name}は${damage}のダメージを受けた！`);
    }
}