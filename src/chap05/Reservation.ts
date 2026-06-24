import { ValidationError } from "./ValidationError.js";

/**
 * 予約状態
 */
export type ReservationStatus = "reserved" | "checkedIn" | "cancelled";

export class Reservation {
    private readonly _reservationId: string;
    private _guestName: string = "";
    private _roomNo: string = "";
    private _nights: number = 0;
    private _status: ReservationStatus;

    /**
     * コンストラクタ
     * @param reservationId 予約番号
     * @param guestName 宿泊者名
     * @param roomNo 部屋番号
     * @param nights 宿泊数
     * @param status 状態
     */
    constructor(reservationId: string, guestName: string, roomNo: string, nights: number, status: ReservationStatus) {
        if (!reservationId) throw new ValidationError("予約IDは必須です");
        this._reservationId = reservationId;
        this.updateGuestName(guestName);
        this.updateRoomNo(roomNo);
        this.validationNights(nights);
        this._status = status;
    }

    /**
     * Getter
     */
    public get reservationId(): string {
        return this._reservationId;
    }
    public get guestName(): string {
        return this._guestName;
    }
    public get roomNo(): string {
        return this._roomNo;
    }
    public get nights(): number {
        return this._nights;
    }
    public get status(): ReservationStatus {
        return this._status;
    }

    /**
     * 予約が有効かどうか取得するGetter
     */
    public get isActive(): boolean {
        return this._status !== "cancelled";
    }

    /**
     * 宿泊者変更メソッド
     * @param guestName 宿泊者
     */
    private updateGuestName(guestName: string): void {
        if (!guestName) throw new ValidationError("宿泊者名は必須です");
        this._guestName = guestName;
    }

    /**
     * 部屋番号変更メソッド
     * @param roomNo 部屋番号
     */
    private updateRoomNo(roomNo: string): void {
        if (!roomNo) throw new ValidationError("部屋番号は必須です");
        this._roomNo = roomNo;
    }

    /**
     * 宿泊数チェックメソッド
     * @param nights 宿泊数
     */
    private validationNights(nights: number): void {
        if (nights < 1) throw new ValidationError("宿泊数は1泊以上で入力してください");
        this._nights = nights;
    }

    /**
     * キャンセルメソッド
     */
    public cancel(): void {
        if (this._status === "cancelled") throw new ValidationError("すでにキャンセル済みです");
        else {
            this._status = "cancelled";
        }
    }

    public toString(): string {
        return `[予約ID: ${this.reservationId}] ${this.guestName} / 部屋: ${this.roomNo} / ${this.nights}泊 / 状態: ${this.status}`;
    }
}