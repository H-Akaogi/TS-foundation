import { ValidationError } from "./ValidationError.js";
export class Reservation {
    _reservationId;
    _guestName = "";
    _roomNo = "";
    _nights = 0;
    _status;
    /**
     * コンストラクタ
     * @param reservationId 予約番号
     * @param guestName 宿泊者名
     * @param roomNo 部屋番号
     * @param nights 宿泊数
     * @param status 状態
     */
    constructor(reservationId, guestName, roomNo, nights, status) {
        if (!reservationId)
            throw new ValidationError("予約IDは必須です");
        this._reservationId = reservationId;
        this.updateGuestName(guestName);
        this.updateRoomNo(roomNo);
        this.validationNights(nights);
        this._status = status;
    }
    /**
     * Getter
     */
    get reservationId() {
        return this._reservationId;
    }
    get guestName() {
        return this._guestName;
    }
    get roomNo() {
        return this._roomNo;
    }
    get nights() {
        return this._nights;
    }
    get status() {
        return this._status;
    }
    /**
     * 予約が有効かどうか取得するGetter
     */
    get isActive() {
        return this._status !== "cancelled";
    }
    /**
     * 宿泊者変更メソッド
     * @param guestName 宿泊者
     */
    updateGuestName(guestName) {
        if (!guestName)
            throw new ValidationError("宿泊者名は必須です");
        this._guestName = guestName;
    }
    /**
     * 部屋番号変更メソッド
     * @param roomNo 部屋番号
     */
    updateRoomNo(roomNo) {
        if (!roomNo)
            throw new ValidationError("部屋番号は必須です");
        this._roomNo = roomNo;
    }
    /**
     * 宿泊数チェックメソッド
     * @param nights 宿泊数
     */
    validationNights(nights) {
        if (nights < 1)
            throw new ValidationError("宿泊数は1泊以上で入力してください");
        this._nights = nights;
    }
    /**
     * キャンセルメソッド
     */
    cancel() {
        if (this._status === "cancelled")
            throw new ValidationError("すでにキャンセル済みです");
        else {
            this._status = "cancelled";
        }
    }
    toString() {
        return `[予約ID: ${this.reservationId}] ${this.guestName} / 部屋: ${this.roomNo} / ${this.nights}泊 / 状態: ${this.status}`;
    }
}
//# sourceMappingURL=Reservation.js.map