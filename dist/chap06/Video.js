/**
 * 演習6-2 制約(extends)付きのジェネリクスを利用する
 * Videoを表すクラス
 */
export class Video {
    title;
    duration;
    /**
     * コンストラクタ
     * @param title タイトル
     * @param duration 再生時間
     */
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    /**
     * タイトルと再生時間を表示する
     */
    printName() {
        console.log(`🎥 Video: ${this.title} (${this.duration}分)`);
    }
}
//# sourceMappingURL=Video.js.map