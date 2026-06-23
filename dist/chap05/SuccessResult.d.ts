import type { ApiResponse } from "./ApiResponse.js";
/**
 * Union型を利用する
 * レスポンス取得成功を表すクラス
 */
export declare class SuccessResult implements ApiResponse {
    private _data;
    /**
     * コンストラクタ
     * @param data レスポンスデータ
     */
    constructor(data: string);
    /**
     * 取得成功メッセージを表示する
     */
    display(): void;
}
//# sourceMappingURL=SuccessResult.d.ts.map