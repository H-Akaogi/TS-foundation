import type { Loggable } from "./Loggable.js";
import type { Sendable } from "./Sendable.js";
/**
 * 5-5. インターフェース
 * メール送信サービス
 * 送信(Sendable)と履歴表示(Loggable)の両方の能力を持つ
 */
export declare class EmailService implements Sendable, Loggable {
    private _address;
    constructor(_address: string);
    /**
     * メッセージを通知するメソッド
     * @param message メッセージ
     */
    send(message: string): void;
    /**
     * ログを出力するメソッド
     */
    showLog(): void;
}
//# sourceMappingURL=EmailService.d.ts.map