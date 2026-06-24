// データの受信とパース
// 擬似的なAPIレスポンス
const responseJson = '{"id": 101, "name": "田中太郎", "email": "tanaka@example.com"}';
// JSON文字列をオブジェクトに変換し、as を使って User 型であることを明示する
const receivedUser = JSON.parse(responseJson);
// 型が効いているので、.name や .email が安全に補完される
console.log(`受信したユーザー: ${receivedUser.name} (${receivedUser.email})`);
// データの送信準備
// 新しいユーザーオブジェクトを作成
const newUser = {
    id: 102,
    name: "佐藤花子",
    email: "sato@example.com"
};
// オブジェクトをJSON文字列に変換
const requestJson = JSON.stringify(newUser);
console.log("送信するJSON文字列:");
console.log(requestJson);
export {};
//# sourceMappingURL=index.js.map