export declare class BankAccount {
    private readonly _accountNo;
    private _ownerName;
    private _balance;
    /**
     * コンストラクタ
     * @param accountNo 口座番号
     * @param ownerName 名義人
     * @param balance 残高
     */
    constructor(accountNo: string, ownerName: string, balance: number);
    /**
     * 名義人変更メソッド
     * @param ownerName 名義人
     */
    private updateOwnerName;
    /**
     * 残高チェック
     * @param balance 残高
     */
    private validateBalance;
    /**
     * Getter
     */
    get accountNo(): string;
    get ownerName(): string;
    get balance(): number;
    /**
     * 入金メソッド
     * @param amount 入金額
     */
    deposit(amount: number): void;
    /**
     * 出金メソッド
     * @param amount 出金額
     */
    withdraw(amount: number): void;
    toString(): string;
}
//# sourceMappingURL=BankAccount.d.ts.map