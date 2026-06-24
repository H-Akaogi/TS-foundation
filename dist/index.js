// 現在のプロフィール情報
const currentState = {
    id: "U001",
    name: "田中 太郎",
    email: "tanaka@example.com",
    bio: "よろしくお願いします！"
};
// プロフィールを更新する関数
function updateProfile(current, payload) {
    // スプレッド構文(...)を使って、現在の状態に変更分を上書きして新しいオブジェクトを返します
    return { ...current, ...payload };
}
//  nameとbioだけを指定して更新関数を呼び出す
const updatedState = updateProfile(currentState, {
    name: "田中 一郎", // 名前を更新
    bio: "Reactの勉強中です！" // 自己紹介を更新
    // id や email は省略可能（Partialのおかげでエラーにならない）
});
console.log("--- 更新前 ---");
console.log(currentState);
console.log("--- 更新後 ---");
console.log(updatedState);
export {};
//# sourceMappingURL=index.js.map