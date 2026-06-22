/*
 * 演習3-10 for...in文の機能を確認する
 */
export function ex310_func() {
    // 口座を表すオブジェクト
    const account = {
        no: "101011",
        name: "山田 太郎",
        balance: 10000
    };
    for (const key in account) {
        console.log(`${key}: ${account[key]}`);
    }
}
//# sourceMappingURL=ex3-10.js.map