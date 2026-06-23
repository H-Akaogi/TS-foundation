/**
 * 演習5-1 クラスを作成して利用する
 * 演習5-2 GetterとSetterを利用する
 */
/**
 * 商品を表すクラス
 */
export declare class Product {
    /**
     * 内部保持用
     * privateにする
     * プロパティ名には_を付ける
     */
    private _id;
    private _name;
    private _price;
    /**
     * コンストラクタ
     * @param id 商品Id
     * @param name 商品名
     * @param price 単価
     */
    constructor(id: string, name: string, price: number);
    /**
     * Getter(取得用)
     */
    get id(): string;
    get name(): string;
    get price(): number;
    /**
     * Setter(変更用)
     */
    set id(value: string);
    set name(value: string);
    set price(value: number);
    /**
     * 商品の詳細を表示するメソッド
     */
    print(): void;
}
//# sourceMappingURL=Product.d.ts.map