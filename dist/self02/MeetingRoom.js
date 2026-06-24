import { ValidationError } from "../chap05/ValidationError.js";
/**
 * 応用演習03 MeetingRoomクラス
 */
export class MeetingRoom {
    _roomId;
    _name = "";
    _capacity = 0;
    /**
     * コンストラクタ
     * @param roomId 会議室ID
     * @param name 会議室名
     * @param capacity 定員
     */
    constructor(roomId, name, capacity) {
        if (!roomId)
            throw new ValidationError("会議室IDは必須です");
        this._roomId = roomId;
        this.updateName(name);
        this.validateCapacity(capacity);
    }
    /**
     * 会議室名変更メソッド
     * @param name 会議室名
     */
    updateName(name) {
        if (!name)
            throw new ValidationError("会議室名は必須です");
        this._name = name;
    }
    /**
     * 定員チェックメソッド
     * @param capacity 定員
     */
    validateCapacity(capacity) {
        if (capacity < 1)
            throw new ValidationError("定員は1人以上で入力してください");
        this._capacity = capacity;
    }
    /**
     * Getter
     */
    get roomId() {
        return this._roomId;
    }
    get name() {
        return this._name;
    }
    get capacity() {
        return this._capacity;
    }
    /**
     * インターフェース実装
     */
    printReservationName() {
        console.log(`会議室予約: ${this.name} / 定員: ${this.capacity}人`);
    }
}
//# sourceMappingURL=MeetingRoom.js.map