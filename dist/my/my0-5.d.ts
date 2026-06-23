/**
 * 条件：
 * @param message 必須
 * @param formatter コールバック関数
 * formatter は文字列を受け取り、文字列を返す
 * formatter を使って加工した結果を console.log する
 */
export declare const showMessage: (message: string, formatter: (text: string) => string) => void;
/**
 * 条件：
 * @param scores number[]
 * @param filterFunc コールバック関数
 * filterFunc は点数を受け取り、true または false を返す
 * filterFunc が true を返した点数だけ表示する
 */
export declare const showFilteredScores: (scores: number[], filterFunc: (score: number) => boolean) => void;
/**
 * 条件：
 * @param price 必須引数
 * @param shoppingFee デフォルト引数で 500
 * @param couponRate オプション引数
 * @returns クーポンがある場合は、商品価格に値引きを適用してから送料を足す
 */
export declare function calcTotal(price: number, shoppingFee?: number, couponRate?: number): number;
/**
 * 条件：
 * @param numbers number[]
 * @param converter コールバック関数
 * @returns converter は数値を受け取り、数値を返す
 * map を使わず、for...of で書く
 */
export declare const convertNumbers: (numbers: number[], converter: (n: number) => number) => number[];
/**
 * 条件：
 * @param names string[]
 * @param formatter コールバック関数
 * formatter は文字列を受け取り、文字列を返す
 * for...of を使う
 */
export declare const showFormattedNames: (names: string[], formatter: (name: string) => string) => void;
export declare const showFilteredWords: (words: string[], filterFunc: (word: string) => boolean) => void;
//# sourceMappingURL=my0-5.d.ts.map