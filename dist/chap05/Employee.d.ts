/**
 * 5-4. クラスの継承
 * 従業員を表すクラス
 */
export declare class Employee {
    private _id;
    private _name;
    protected _baseSalary: number;
    /**
     * コンストラクタ
     * @param id 社員番号
     * @param name 氏名
     * @param baseSalary 基本給
     */
    constructor(id: string, name: string, baseSalary: number);
    get name(): string;
    get id(): string;
    /**
     * 業務を行うメソッド
     */
    work(): void;
    /**
     * 給与を計算するメソッド
     * 親クラスでは「基本給をそのまま返す」標準的な動きを定義
     * @returns 給与
     */
    calculateSalary(): number;
}
//# sourceMappingURL=Employee.d.ts.map