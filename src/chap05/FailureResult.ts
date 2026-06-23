import type { ApiResponse } from "./ApiResponse.js";
/**
 * Union型を利用する
 * レスポンス取得失敗を表すクラス
 */
export class FailureResult implements ApiResponse {
    // エラーメッセージを表すプロパティ
    private _message: string;

    /**
     * コンストラクタ
     * @param message 
     */
    constructor(message: string) {
        this._message = message;
    }

    /**
     * エラーメッセージを表示する
     */
    public display(): void {
        console.log(`エラー発生: ${this._message}`);
    }
}