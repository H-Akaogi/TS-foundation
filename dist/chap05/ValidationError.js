/**
 * 5-7. 例外処理
 * バリデーションエラーを表すクラス
 */
export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
//# sourceMappingURL=ValidationError.js.map