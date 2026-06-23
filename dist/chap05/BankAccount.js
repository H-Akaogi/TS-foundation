/**
 * 自習：BankAccountクラス
 */
import { ValidationError } from "./ValidationError.js";
export class BankAccount {
    _accountNo;
    _ownerName = "";
    _balance = 0;
    /**
     * コンストラクタ
     * @param accountNo 口座番号
     * @param ownerName 名義人
     * @param balance 残高
     */
    constructor(accountNo, ownerName, balance) {
        if (!accountNo)
            throw new ValidationError("口座番号は必須です");
        this._accountNo = accountNo;
        this.updateOwnerName(ownerName);
        this.validateBalance(balance);
    }
    /**
     * 名義人変更メソッド
     * @param ownerName 名義人
     */
    updateOwnerName(ownerName) {
        if (!ownerName)
            throw new ValidationError("名義人は必須です");
        this._ownerName = ownerName;
    }
    /**
     * 残高チェック
     * @param balance 残高
     */
    validateBalance(balance) {
        if (balance < 0)
            throw new ValidationError("残高は0円以上で入力してください");
        this._balance = balance;
    }
    /**
     * Getter
     */
    get accountNo() {
        return this._accountNo;
    }
    get ownerName() {
        return this._ownerName;
    }
    get balance() {
        return this._balance;
    }
    /**
     * 入金メソッド
     * @param amount 入金額
     */
    deposit(amount) {
        if (amount <= 0)
            throw new ValidationError("入金額は1円以上で入力してください");
        this._balance += amount;
    }
    /**
     * 出金メソッド
     * @param amount 出金額
     */
    withdraw(amount) {
        if (amount <= 0)
            throw new ValidationError("出金額は1円以上で入力してください");
        else if (amount > this._balance)
            throw new ValidationError("残高が不足しています");
        this._balance -= amount;
    }
    toString() {
        return `[口座番号: ${this.accountNo}] ${this.ownerName} - 残高: ${this.balance}円`;
    }
}
//# sourceMappingURL=BankAccount.js.map