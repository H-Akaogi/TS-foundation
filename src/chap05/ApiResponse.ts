/**
 * 演習5-5 Union型を利用する
 * Union型を利用する
 * APIレスポンスを表すインターフェース
 */

export interface ApiResponse {
    // 結果を表示するメソッド
    display(): void;
}