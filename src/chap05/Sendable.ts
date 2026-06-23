/**
 * 5-5. インターフェース
 * 通知を表すインターフェース
 */
export interface Sendable {
    /**
     * メッセージを通知するメソッド
     */
    send(message: string): void;
}