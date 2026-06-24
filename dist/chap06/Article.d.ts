import type { Printable } from "./Printable.js";
/**
 * 演習6-2 制約(extends)付きのジェネリクスを利用する
 * 記事を表すクラス
 */
export declare class Article implements Printable {
    private title;
    private author;
    /**
     * コンストラクタ
     * @param title タイトル
     * @param author 著者
     */
    constructor(title: string, author: string);
    /**
     * タイトルと著者を表示する
     */
    printName(): void;
}
//# sourceMappingURL=Article.d.ts.map