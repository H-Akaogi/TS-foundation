import { ValidationError } from "../chap05/ValidationError.js";
/**
 * 応用演習02 HotelRoomクラス
 */
export class HotelRoom {
    _roomNo;
    _roomType = "";
    _pricePerNight = 0;
    /**
     * コンストラクタ
     * @param roomNo 部屋番号
     * @param roomType 部屋タイプ
     * @param pricePerNight 料金
     */
    constructor(roomNo, roomType, pricePerNight) {
        if (!roomNo)
            throw new ValidationError("部屋番号が未入力です");
        this._roomNo = roomNo;
        this.updateRoomType(roomType);
        this.validatePricePerNight(pricePerNight);
    }
    /**
     * 部屋タイプ変更メソッド
     * @param roomType 部屋タイプ
     */
    updateRoomType(roomType) {
        if (!roomType)
            throw new ValidationError("部屋タイプは必須です");
        this._roomType = roomType;
    }
    /**
     * 料金変更メソッド
     * @param pricePerNight 料金
     */
    validatePricePerNight(pricePerNight) {
        if (pricePerNight < 0)
            throw new ValidationError("料金は0円以上に設定してください");
        this._pricePerNight = pricePerNight;
    }
    /**
     * Getter
     */
    get roomNo() {
        return this._roomNo;
    }
    get roomType() {
        return this._roomType;
    }
    get pricePerNight() {
        return this._pricePerNight;
    }
    /**
     * インターフェース実装
     */
    printReservationName() {
        console.log(`部屋予約: ${this.roomNo}号室 / ${this.roomType}`);
    }
}
//# sourceMappingURL=HotelRoom.js.map