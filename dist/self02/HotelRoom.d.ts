import type { Reservable } from "./Reservable.js";
/**
 * 応用演習02 HotelRoomクラス
 */
export declare class HotelRoom implements Reservable {
    private readonly _roomNo;
    private _roomType;
    private _pricePerNight;
    /**
     * コンストラクタ
     * @param roomNo 部屋番号
     * @param roomType 部屋タイプ
     * @param pricePerNight 料金
     */
    constructor(roomNo: string, roomType: string, pricePerNight: number);
    /**
     * 部屋タイプ変更メソッド
     * @param roomType 部屋タイプ
     */
    private updateRoomType;
    /**
     * 料金変更メソッド
     * @param pricePerNight 料金
     */
    private validatePricePerNight;
    /**
     * Getter
     */
    get roomNo(): string;
    get roomType(): string;
    get pricePerNight(): number;
    /**
     * インターフェース実装
     */
    printReservationName(): void;
}
//# sourceMappingURL=HotelRoom.d.ts.map