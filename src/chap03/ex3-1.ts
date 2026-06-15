/*
 * 演習3-1入力して文字列をnumber型に変換する
 */

// prompt-syncをインポートする
// importはusingと同じ
import promptSync from 'prompt-sync';
// ユーザー入力を受け取るための準備(sigint: trueはCtrl+C で終了できるようにする設定）
const prompt = promptSync({ sigint: true });

// export: publicと一緒。別のソースファイルからも利用可能にするために必要。
// 戻り値は後ろに書く(void)
export function ex31_func(): void {
    // キー入力された値を取得する
    const value = prompt("値を入力してください->");
    // 文字列を変換した結果を表示する
    console.log(`parseInt()関数を利用: ${parseInt(value)}`); // 文字列を整数に変換
    console.log(`Number()関数を利用: ${Number(value)}`); // 文字列をNumber型に変換
    console.log(`parseFloat()関数を利用: ${parseFloat(value)}`); // 文字列を小数点に変換
}