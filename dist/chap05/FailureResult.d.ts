import type { ApiResponse } from "./ApiResponse.js";
/**
 * Union型を利用する
 * レスポンス取得失敗を表すクラス
 */
export declare class FailureResult implements ApiResponse {
    private _message;
    /**
     * コンストラクタ
     * @param message
     */
    constructor(message: string);
    /**
     * エラーメッセージを表示する
     */
    display(): void;
}
//# sourceMappingURL=FailureResult.d.ts.map