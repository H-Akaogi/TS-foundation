import { Employee } from "./Employee.js";

/**
 * 5-4. クラスの継承
 * 管理職を表すクラス
 */
export class Manager extends Employee {
    // 役職手当を表すプロパティ
    private _managerAllowance: number;

    /**
     * コンストラクタ
     * @param id 従業員Id
     * @param name 従業員名
     * @param baseSalary 基本給
     * @param managerAllowance 役職手当
     */
    constructor(id: string, name: string, baseSalary: number, managerAllowance: number) {
        // 継承元クラスのコンストラクタを実行する
        super(id, name, baseSalary);
        // 役職手当を設定する
        this._managerAllowance = managerAllowance;
    }

    /**
     * 給与計算メソッドをオーバーライド
     * @returns 基本給+役職手当
     */
    public override calculateSalary(): number {
        return this._baseSalary + this._managerAllowance;
    }
}