/*
 * 演習3-2 number型を文字列に変換する
 */
export function ex32_func(): void {
    const value = 123;
    // toString()メソッドを利用する
    console.log(`toString()メソッド: ${value.toString()}`);
    // String()関数を利用する
    console.log(`String()関数: ${String(value)}`);

    //let flag: boolean;
    //console.log(flag);

    // const scores = [80, 90, 100]; // 型を明示しないで配列を書くこともできる
}