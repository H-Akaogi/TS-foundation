import type { Product } from "./chap06/Product.js";

// 画面表示に必要な3項目だけを抽出した型を作る
type ProductCardProps = Pick<Product, "id" | "name" | "price">;

// 商品カードを描画する関数（Reactコンポーネントを想定）
// 引数には、全体ではなく抽出した軽量な型を指定します
function renderProductCard(props: ProductCardProps) {
    console.log(`💳 [${props.id}] ${props.name} - ¥${props.price.toLocaleString()}`);
}

/**
 * 商品データ
 */
const apiData: Product = {
    id: "P100",
    name: "高音質ワイヤレスイヤホン",
    price: 15000,
    description: "ノイズキャンセリング搭載の...",
    stock: 50,
    createdAt: new Date()
};

// 商品情報を表示する
renderProductCard(apiData);