/**
 * 演習5-1 クラスを作成して利用する
 */
/**
 * 商品を表すクラス
 */
export class Product {
    // 商品Idプロパティ
    id;
    // 商品名プロパティ
    name;
    // 単価プロパティ
    price;
    /**
     * コンストラクタ
     * @param id 商品Id
     * @param name 商品名
     * @param price 単価
     */
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    /**
     * 商品の詳細を表示するメソッド
     */
    print() {
        console.log(`商品Id: ${this.id}`);
        console.log(`商品名: ${this.name}`);
        console.log(`単価: ${this.price}`);
    }
}
//# sourceMappingURL=Product.js.map