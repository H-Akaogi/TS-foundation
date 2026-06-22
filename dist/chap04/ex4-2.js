/**
 * 演習4-2 オプション引数を持つ関数を作成して利用する
 */
/**
 * 指定された率の値引きをした単価を計算して返す
 * @param price 単価
 * @param discountRate 値引き率(オプション引数)
 * @returns 値引き後単価
 * ?を付けるとオプション引数になる
 */
export function calcPrice(price, discountRate) {
    /// discountRateが渡されずundefinedだった場合、元の価格priceをそのまま返す
    if (discountRate === undefined) {
        return price;
    }
    return price * (1 - discountRate);
}
//# sourceMappingURL=ex4-2.js.map