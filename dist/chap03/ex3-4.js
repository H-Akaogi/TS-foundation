/*
 * 演習3-4 スプレッド演算子と分割代入を確認する
 */
export function ex34_func() {
    const product = { id: "A01", name: "スマートフォン", price: 80000, stock: 10 };
    const saleProduct = {
        ...product,
        price: 75000,
        isOnSale: true
    };
    const { name, price } = saleProduct;
    console.log(`${name}は現在${price}円です`);
}
//# sourceMappingURL=ex3-4.js.map