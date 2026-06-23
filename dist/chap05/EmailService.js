/**
 * 5-5. インターフェース
 * メール送信サービス
 * 送信(Sendable)と履歴表示(Loggable)の両方の能力を持つ
 */
export class EmailService {
    _address;
    constructor(_address) {
        this._address = _address;
    }
    /**
     * メッセージを通知するメソッド
     * @param message メッセージ
     */
    send(message) {
        console.log(`【Email送信】宛先: ${this._address} / 内容: ${message}`);
    }
    /**
     * ログを出力するメソッド
     */
    showLog() {
        console.log(`>>> メール送信履歴を表示します(宛先: ${this._address})`);
    }
}
//# sourceMappingURL=EmailService.js.map