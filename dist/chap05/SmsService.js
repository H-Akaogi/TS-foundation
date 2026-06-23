/**
 * 5-5. インターフェイス
 * SMS送信サービス
 * 送信(Sendable)機能だけを持つ
 */
export class SmsService {
    _phoneNumber;
    constructor(_phoneNumber) {
        this._phoneNumber = _phoneNumber;
    }
    /**
     * メッセージを通知するメソッド
     * @param message メッセージ
     */
    send(message) {
        console.log(`【SMS送信】番号: ${this._phoneNumber} / 内容: ${message}`);
    }
}
//# sourceMappingURL=SmsService.js.map