/*
 * 演習3-7 switch～case文の機能を確認する-①
 */
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
export function ex37_func() {
    const month = prompt("月名(英名)を入力してください->");
    let message = "";
    switch (month) {
        case "January":
            message = "1月です。";
            break;
        case "February":
            message = "2月です。";
            break;
        case "March":
            message = "3月です。";
            break;
        case "April":
            message = "4月です。";
            break;
        case "May":
            message = "5月です。";
            break;
        case "June":
            message = "6月です。";
            break;
        case "July":
            message = "7月です。";
            break;
        case "August":
            message = "8月です。";
            break;
        case "September":
            message = "9月です。";
            break;
        case "October":
            message = "10月です。";
            break;
        case "November":
            message = "11月です。";
            break;
        case "December":
            message = "12月です。";
            break;
    }
    console.log(message);
}
//# sourceMappingURL=ex3-7.js.map