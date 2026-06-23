import { FailureResult } from "./chap05/FailureResult.js";
import { SuccessResult } from "./chap05/SuccessResult.js";
function processResponse(response) {
    response.display(); // ポリモーフィズム：インスタンスによって動きが変わる
}
const res1 = new SuccessResult("田中 太郎");
const res2 = new FailureResult("認証失敗");
processResponse(res1);
processResponse(res2);
//# sourceMappingURL=index.js.map