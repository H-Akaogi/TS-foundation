/**
 * Union型を利用する
 * レスポンス取得成功を表すクラス
 */
export class SuccessResult {
    // レスポンスデータを表すプロパティ
    _data;
    /**
     * コンストラクタ
     * @param data レスポンスデータ
     */
    constructor(data) {
        this._data = data;
    }
    /**
     * 取得成功メッセージを表示する
     */
    display() {
        console.log(`取得成功:${this._data}`);
    }
}
//# sourceMappingURL=SuccessResult.js.map