// prompt-syncをインポートする
import promptSync from 'prompt-sync';
import { ValidationError } from './chap05/ValidationError.js';
import { User, type UserRole } from './chap05/User.js';

const prompt = promptSync({ sigint: true });

try {
    const id = prompt("ユーザーIDを入力してください->");
    const lastName = prompt("姓を入力してください->");
    const firstName = prompt("名を入力してください->");
    const email = prompt("メールアドレスを入力してください->");
    const age = Number(prompt("年齢を入力してください->"));
    const roleInput = prompt("権限を入力してください (admin/member/guest)->");

    // as UserRole で型アサーションを行う
    const user = new User(id, lastName, firstName, email, age, roleInput as UserRole);
    console.log(user);

} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`バリデーションエラー: ${error.message}`);
    } else {
        console.error(`予期せぬエラー: ${error}`);
    }
}