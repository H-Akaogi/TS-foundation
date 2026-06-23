import { FailureResult } from "./chap05/FailureResult.js";
import { SuccessResult } from "./chap05/SuccessResult.js";

// クラスのインスタンスをUnion型でまとめる
type ResponseResult = SuccessResult | FailureResult;

function processResponse(response: ResponseResult): void {
    response.display(); // ポリモーフィズム：インスタンスによって動きが変わる
}

const res1: ResponseResult = new SuccessResult("田中 太郎");
const res2: ResponseResult = new FailureResult("認証失敗");

processResponse(res1);
processResponse(res2);