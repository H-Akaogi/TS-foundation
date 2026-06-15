/*
 * 演習3-6 if-else文の機能を確認する
 */

import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

export function ex36_func(): void {

    const input = prompt("金額を入力してください->");

    const price = parseInt(input);

    const isMember: boolean = false;

    if (isMember || price >= 5000) {
        console.log("送料無料です。");
    }
    else {
        console.log("送料がかかります。");
    }
}