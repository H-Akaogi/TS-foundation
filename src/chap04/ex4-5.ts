/**
 * 演習4-5：コールバック関数を利用する
 */
/**
 * コールバック関数：関数を引数として渡す(処理の委譲)
 * @param a 
 * @param b 
 * @param callback 
 */
export function calculate(a: number, b: number, callback: (result: number) => void): void {
    // aとbを加算する
    const sum = a + b;
    // 加算の結果をコールバック関数に渡して実行する
    callback(sum);
}