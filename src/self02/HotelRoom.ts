import type { Reservable } from "./Reservable.js";
import { ValidationError } from "../chap05/ValidationError.js";

/**
 * 応用演習02 HotelRoomクラス
 */
export class HotelRoom implements Reservable {
    private readonly _roomNo: string;
    private _roomType: string = "";
    private _pricePerNight: number = 0;

    /**
     * コンストラクタ
     * @param roomNo 部屋番号
     * @param roomType 部屋タイプ
     * @param pricePerNight 料金
     */
    constructor(roomNo: string, roomType: string, pricePerNight: number) {
        if (!roomNo) throw new ValidationError("部屋番号が未入力です");
        this._roomNo = roomNo;
        this.updateRoomType(roomType);
        this.validatePricePerNight(pricePerNight);
    }

    /**
     * 部屋タイプ変更メソッド
     * @param roomType 部屋タイプ
     */
    private updateRoomType(roomType: string): void {
        if (!roomType) throw new ValidationError("部屋タイプは必須です");
        this._roomType = roomType;
    }

    /**
     * 料金変更メソッド
     * @param pricePerNight 料金
     */
    private validatePricePerNight(pricePerNight: number): void {
        if (pricePerNight < 0) throw new ValidationError("料金は0円以上に設定してください");
        this._pricePerNight = pricePerNight;
    }

    /**
     * Getter
     */
    public get roomNo(): string {
        return this._roomNo;
    }
    public get roomType(): string {
        return this._roomType;
    }
    public get pricePerNight(): number {
        return this._pricePerNight;
    }

    /**
     * インターフェース実装
     */
    public printReservationName(): void {
        console.log(`部屋予約: ${this.roomNo}号室 / ${this.roomType}`);
    }
}