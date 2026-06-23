/**
 * Union型を利用する
 * レスポンス取得失敗を表すクラス
 */
export class FailureResult {
    // エラーメッセージを表すプロパティ
    _message;
    /**
     * コンストラクタ
     * @param message
     */
    constructor(message) {
        this._message = message;
    }
    /**
     * エラーメッセージを表示する
     */
    display() {
        console.log(`エラー発生: ${this._message}`);
    }
}
//# sourceMappingURL=FailureResult.js.map