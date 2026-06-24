import type { Printable } from "./Printable.js";
/**
 * 演習6-2 制約(extends)付きのジェネリクスを利用する
 * ジェネリクスに制約を課した管理クラス
 * T は必ずPrintableの構造で、printName()メソッドを持っている必要がある
 */
export declare class MediaManager<T extends Printable> {
    private items;
    /**
     * Printableインターフェース実装を追加する
     * @param item
     */
    add(item: T): void;
    /**
     * PrintableインターフェースのprintName()メソッドを実装する
     */
    showAll(): void;
}
//# sourceMappingURL=MediaManager.d.ts.map