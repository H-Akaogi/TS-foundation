/*
 * 演習3-10 for...in文の機能を確認する
 */

export function ex310_func(): void {
    // 口座を表すオブジェクト
    const account = {
        no: "101011",
        name: "山田 太郎",
        balance: 10000
    };

    /// accountのプロパティ名を1つずつkeyに入れて繰り返す
    /// 1回目: key = "no"
    /// 2回目: key = "name"
    /// 3回目: key = "balance"
    for (const key in account) {
        /// {key}: テンプレートリテラル. keyの中身を文字列に埋め込む
        /// [key as keyof typeof account]: このkeyはaccountのプロパティ名のどれかですよ
        /// typeof account: accountの型を取り出す
        /// keyof typeof account: accountの型のキーだけを取り出す
        console.log(`${key}: ${account[key as keyof typeof account]}`);
    }
}