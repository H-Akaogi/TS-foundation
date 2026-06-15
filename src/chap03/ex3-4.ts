/*
 * 演習3-4 スプレッド演算子と分割代入を確認する
 */

export function ex34_func(): void {
    const product = { id: "A01", name: "スマートフォン", price: 80000, stock: 10 };
    // スプレッド構文でコピー＆一部上書き＆追加
    const saleProduct = {
        ...product, // 元のデータを展開
        price: 75000, // 値段を上書き
        isOnSale: true // 新しい項目を追加
    };
    // 分割代入で必要な項目だけを取り出す
    const { name, price } = saleProduct;
    // 結果の表示
    console.log(`${name}は現在${price}円です`);
}