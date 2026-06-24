// Node.jsのfsモジュールを読み込む(fs: file system)
import * as fs from 'fs';

/**
 * 演習7-1 非同期処理機能を利用する
 * 指定された駅名がファイルに存在するか確認し、順序を返す非同期関数
 * @param name 検索する駅名
 * @returns 検索結果のメッセージを表すPromiseオブジェクト
 */
export function searchStation(name: string): Promise<string> {

    // 非同期処理の結果を返すPromiseオブジェクトを作成
    // 成功：resorve, 失敗：rejectの2つの関数を持つ
    return new Promise((resolve, reject) => {

        // ファイル読み込み
        fs.readFile(
            `./src/chap07/stations.txt`,
            `utf8`,
            (err, data) => { // コールバック関数(ファイル読み込み後に実行される)

                if (err) {
                    reject("エラー：ファイルの読み込みに失敗しました");
                    return;
                }

                // テキストデータを改行で分割し、駅名の配列を作成する
                // Windowsの改行は \r\n
                // Mac, Linuxの改行は \n
                const stations = data.split(/\r?\n/);

                // 配列の中から、検索対象の駅名が何番目のインデックスにあるかを取得する
                // 存在しない場合は-1が返される
                const index = stations.indexOf(name);

                if (index !== -1) {
                    // 見つかった場合：インデックスは0から始まるため、+1して「○番目」とする
                    resolve(`${name}駅は、${index + 1}番目の駅です。`);
                }
                else {
                    // 見つからない場合：指定されたエラーメッセージを返す
                    reject(`駅名:${name}は存在しませんでした。`);
                }
            });
    });
}