import type { Printable } from "./Printable.js";
/**
 * 演習6-2 制約(extends)付きのジェネリクスを利用する
 * Videoを表すクラス
 */
export declare class Video implements Printable {
    private title;
    private duration;
    /**
     * コンストラクタ
     * @param title タイトル
     * @param duration 再生時間
     */
    constructor(title: string, duration: number);
    /**
     * タイトルと再生時間を表示する
     */
    printName(): void;
}
//# sourceMappingURL=Video.d.ts.map