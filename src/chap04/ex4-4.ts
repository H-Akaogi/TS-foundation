/**
 * 演習4-4 アロー関数を利用する 
 */
/**
 * アロー関数を利用してex4-3と同じ処理を記述
 * @param price 
 * @param discountRate 
 * @returns 
 */
export const discountPrice = (price: number, discountRate: number): number => {
    return price * (1 - discountRate);
}