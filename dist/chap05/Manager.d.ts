import { Employee } from "./Employee.js";
/**
 * 5-4. クラスの継承
 * 管理職を表すクラス
 */
export declare class Manager extends Employee {
    private _managerAllowance;
    /**
     * コンストラクタ
     * @param id 従業員Id
     * @param name 従業員名
     * @param baseSalary 基本給
     * @param managerAllowance 役職手当
     */
    constructor(id: string, name: string, baseSalary: number, managerAllowance: number);
    /**
     * 給与計算メソッドをオーバーライド
     * @returns 基本給+役職手当
     */
    calculateSalary(): number;
}
//# sourceMappingURL=Manager.d.ts.map