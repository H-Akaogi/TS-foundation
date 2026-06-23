/**
 * 演習6-1 Genericsを利用する
 * 汎用的なデータ保持クラス
 */
export class Result {
    success;
    data;
    /**
     * コンストラクタでの省略記法を利用
     * @param success 成功/失敗
     * @param data データ
     */
    constructor(success, data) {
        this.success = success;
        this.data = data;
    }
}
//# sourceMappingURL=Result.js.map