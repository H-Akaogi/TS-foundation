/**
 * 商品を表すクラス
 */
export declare class Product {
    /**
     * 内部保持用
     * privateにする
     * プロパティ名には_を付ける
     */
    private readonly _id;
    private _name;
    private _price;
    private _stock;
    /**
     * コンストラクタ
     * @param id 商品Id
     * @param name 商品名
     * @param price 単価
     */
    constructor(id: string, name: string, price: number, stock: number);
    /**
     * Getter(取得用)
     */
    get id(): string;
    get name(): string;
    get price(): number;
    get stock(): number;
    /**
     * Setter(変更用)
     */
    set name(value: string);
    set price(value: number);
    set stock(value: number);
    /**
     * 商品名の変更メソッド
     * @param name 商品名
     */
    private updateName;
    /**
     * 単価の変更メソッド
     * @param price 単価
     */
    private updatePrice;
    /**
     * 在庫数の変更メソッド
     * @param stock 在庫数
     */
    private updateStock;
    /**
     * 税込み価格を返すgetter
     */
    get taxIncludedPrice(): number;
    /**
     * 商品の詳細を表示するメソッド
     */
    toString(): string;
    print(): void;
}
//# sourceMappingURL=Product.d.ts.map