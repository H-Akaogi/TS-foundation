/**
 * 予約状態
 */
export type ReservationStatus = "reserved" | "checkedIn" | "cancelled";
export declare class Reservation {
    private readonly _reservationId;
    private _guestName;
    private _roomNo;
    private _nights;
    private _status;
    /**
     * コンストラクタ
     * @param reservationId 予約番号
     * @param guestName 宿泊者名
     * @param roomNo 部屋番号
     * @param nights 宿泊数
     * @param status 状態
     */
    constructor(reservationId: string, guestName: string, roomNo: string, nights: number, status: ReservationStatus);
    /**
     * Getter
     */
    get reservationId(): string;
    get guestName(): string;
    get roomNo(): string;
    get nights(): number;
    get status(): ReservationStatus;
    /**
     * 予約が有効かどうか取得するGetter
     */
    get isActive(): boolean;
    /**
     * 宿泊者変更メソッド
     * @param guestName 宿泊者
     */
    private updateGuestName;
    /**
     * 部屋番号変更メソッド
     * @param roomNo 部屋番号
     */
    private updateRoomNo;
    /**
     * 宿泊数チェックメソッド
     * @param nights 宿泊数
     */
    private validationNights;
    /**
     * キャンセルメソッド
     */
    cancel(): void;
    toString(): string;
}
//# sourceMappingURL=Reservation.d.ts.map