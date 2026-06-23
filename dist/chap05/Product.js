/**
 * 演習5-1 クラスを作成して利用する
 * 演習5-2 GetterとSetterを利用する
 */
/**
 * 商品を表すクラス
 * プロパティはprivateにする
 */
export class Product {
    // 商品Idプロパティ
    _id;
    // 商品名プロパティ
    _name;
    // 単価プロパティ
    _price;
    /**
     * コンストラクタ
     * @param id 商品Id
     * @param name 商品名
     * @param price 単価
     */
    constructor(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
    }
    /**
     * Getter
     */
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    /**
     * Setter
     */
    set id(value) {
        if (value.length === 0) {
            console.error("商品Idを設定してください。");
            return;
        }
        this._id = value;
    }
    set name(value) {
        if (value.length === 0) {
            console.error("商品名を設定してください。");
            return;
        }
        this._name = value;
    }
    set price(value) {
        if (value < 0) {
            console.error("単価に負の値を設定することはできません。");
        }
        else {
            this._price = value;
        }
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