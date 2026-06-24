/**
 * 演習6-2 制約(extends)付きのジェネリクスを利用する
 * ジェネリクスに制約を課した管理クラス
 * T は必ずPrintableの構造で、printName()メソッドを持っている必要がある
 */
export class MediaManager {
    // Printableインターフェイス実装を管理する配列
    items = [];
    /**
     * Printableインターフェース実装を追加する
     * @param item
     */
    add(item) {
        this.items.push(item);
    }
    /**
     * PrintableインターフェースのprintName()メソッドを実装する
     */
    showAll() {
        console.log("--- メディア一覧を表示します ---");
        // T が Printable であることが保証されているため、安全にメソッドを呼べる
        this.items.forEach(item => item.printName());
    }
}
//# sourceMappingURL=MediaManager.js.map