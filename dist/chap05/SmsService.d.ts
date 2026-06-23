import type { Sendable } from "./Sendable.js";
/**
 * 5-5. インターフェイス
 * SMS送信サービス
 * 送信(Sendable)機能だけを持つ
 */
export declare class SmsService implements Sendable {
    private _phoneNumber;
    constructor(_phoneNumber: string);
    /**
     * メッセージを通知するメソッド
     * @param message メッセージ
     */
    send(message: string): void;
}
//# sourceMappingURL=SmsService.d.ts.map