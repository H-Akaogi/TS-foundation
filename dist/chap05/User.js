import { ValidationError } from "./ValidationError.js";
/**
 * 5-7. 例外処理
 * ユーザーを表すクラス
 */
export class User {
    _id; // ユーザーId
    _lastName = ""; // 姓
    _firstName = ""; // 名
    _email = ""; // メールアドレス
    _age = 0; // 年齢
    _role; // 権限
    /**
     * コンストラクタ
     * @param id ユーザーId
     * @param lastName 姓
     * @param firstName 名
     * @param email メールアドレス
     * @param age 年齢
     * @param role 権限
     */
    constructor(id, lastName, firstName, email, age, role) {
        // ユーザーIdの変更
        if (!id)
            throw new ValidationError("IDは必須です");
        this._id = id;
        this.updateProfile(lastName, firstName);
        this.updateEmail(email);
        this.validateAge(age);
        this._role = role;
    }
    /**
     * 姓名の変更
     * @param lastName 姓
     * @param firstName　名
     */
    updateProfile(lastName, firstName) {
        if (!lastName || !firstName) {
            throw new ValidationError("姓名はどちらも空にできません");
        }
        this._lastName = lastName;
        this._firstName = firstName;
    }
    /**
     * メールアドレスの変更
     * @param email メールアドレス
     */
    updateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new ValidationError(`無効なメール形式です`);
        }
        this._email = email;
    }
    /**
     * 年齢の変更
     * @param age 年齢
     */
    validateAge(age) {
        if (age < 18 || age > 120) {
            throw new ValidationError("18歳未満または120歳以上は登録できません");
        }
        this._age = age;
    }
    /**
     * フルネームを返すメソッド
     */
    get fullName() {
        return `${this._lastName}${this._firstName}`;
    }
    /**
     * オブジェクトの文字列表現
     * @returns ユーザー情報のサマリー文字列
     */
    toString() {
        return `[ID: ${this._id}] ${this.fullName} (${this._role}) - ${this._email}`;
    }
}
//# sourceMappingURL=User.js.map