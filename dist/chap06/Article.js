/**
 * 演習6-2 制約(extends)付きのジェネリクスを利用する
 * 記事を表すクラス
 */
export class Article {
    title;
    author;
    /**
     * コンストラクタ
     * @param title タイトル
     * @param author 著者
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    /**
     * タイトルと著者を表示する
     */
    printName() {
        console.log(`📝 Article: ${this.title} (著者: ${this.author})`);
    }
}
//# sourceMappingURL=Article.js.map