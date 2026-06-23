/**
 * ユーザー権限のUnion型
 */
export type UserRole = "admin" | "member" | "guest";
/**
 * 5-7. 例外処理
 * ユーザーを表すクラス
 */
export declare class User {
    private readonly _id;
    private _lastName;
    private _firstName;
    private _email;
    private _age;
    private _role;
    /**
     * コンストラクタ
     * @param id ユーザーId
     * @param lastName 姓
     * @param firstName 名
     * @param email メールアドレス
     * @param age 年齢
     * @param role 権限
     */
    constructor(id: string, lastName: string, firstName: string, email: string, age: number, role: UserRole);
    /**
     * 姓名の変更
     * @param lastName 姓
     * @param firstName　名
     */
    private updateProfile;
    /**
     * メールアドレスの変更
     * @param email メールアドレス
     */
    private updateEmail;
    /**
     * 年齢の変更
     * @param age 年齢
     */
    private validateAge;
    /**
     * フルネームを返すメソッド
     */
    get fullName(): string;
    /**
     * オブジェクトの文字列表現
     * @returns ユーザー情報のサマリー文字列
     */
    toString(): string;
}
//# sourceMappingURL=User.d.ts.map