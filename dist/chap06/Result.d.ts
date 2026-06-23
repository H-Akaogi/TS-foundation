/**
 * 演習6-1 Genericsを利用する
 * 汎用的なデータ保持クラス
 */
export declare class Result<T> {
    readonly success: boolean;
    readonly data: T;
    /**
     * コンストラクタでの省略記法を利用
     * @param success 成功/失敗
     * @param data データ
     */
    constructor(success: boolean, data: T);
}
//# sourceMappingURL=Result.d.ts.map