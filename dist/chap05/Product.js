/**
 * 演習5-1 クラスを作成して利用する
 * 演習5-2 GetterとSetterを利用する
 * 自習：stock、ValidationError,
 * 税込み価格メソッド、商品変更メソッドを追加
 */
import { ValidationError } from "./ValidationError.js";
/**
 * 商品を表すクラス
 */
export class Product {
    /**
     * 内部保持用
     * privateにする
     * プロパティ名には_を付ける
     */
    // 商品Idプロパティ
    _id;
    // 商品名プロパティ
    _name = "";
    // 単価プロパティ
    _price = 0;
    // 在庫プロパティ
    _stock = 0;
    /**
     * コンストラクタ
     * @param id 商品Id
     * @param name 商品名
     * @param price 単価
     */
    constructor(id, name, price, stock) {
        if (!id)
            throw new ValidationError("Idは必須です");
        this._id = id;
        this.updateName(name);
        this.updatePrice(price);
        this.updateStock(stock);
    }
    /**
     * Getter(取得用)
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
    get stock() {
        return this._stock;
    }
    /**
     * Setter(変更用)
     */
    set name(value) {
        this.updateName(value);
    }
    set price(value) {
        this.updatePrice(value);
    }
    set stock(value) {
        this.updateStock(value);
    }
    /**
     * 商品名の変更メソッド
     * @param name 商品名
     */
    updateName(name) {
        if (!name)
            throw new ValidationError("商品名は必須です");
        this._name = name;
    }
    /**
     * 単価の変更メソッド
     * @param price 単価
     */
    updatePrice(price) {
        if (price < 0)
            throw new ValidationError("単価は0円以上で設定してください");
        this._price = price;
    }
    /**
     * 在庫数の変更メソッド
     * @param stock 在庫数
     */
    updateStock(stock) {
        if (stock < 0)
            throw new ValidationError("在庫数は0個以上で設定してください");
        this._stock = stock;
    }
    /**
     * 税込み価格を返すgetter
     */
    get taxIncludedPrice() {
        return this._price * 1.10;
    }
    /**
     * 商品の詳細を表示するメソッド
     */
    toString() {
        return `[商品Id: ${this.id}] ${this.name} - 価格: ${this.price}円 / 在庫: ${this.stock}個`;
    }
    print() {
        console.log(this.toString());
    }
}
//# sourceMappingURL=Product.js.map