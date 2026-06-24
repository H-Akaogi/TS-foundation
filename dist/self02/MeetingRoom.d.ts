import type { Reservable } from "./Reservable.js";
/**
 * 応用演習03 MeetingRoomクラス
 */
export declare class MeetingRoom implements Reservable {
    private readonly _roomId;
    private _name;
    private _capacity;
    /**
     * コンストラクタ
     * @param roomId 会議室ID
     * @param name 会議室名
     * @param capacity 定員
     */
    constructor(roomId: string, name: string, capacity: number);
    /**
     * 会議室名変更メソッド
     * @param name 会議室名
     */
    private updateName;
    /**
     * 定員チェックメソッド
     * @param capacity 定員
     */
    private validateCapacity;
    /**
     * Getter
     */
    get roomId(): string;
    get name(): string;
    get capacity(): number;
    /**
     * インターフェース実装
     */
    printReservationName(): void;
}
//# sourceMappingURL=MeetingRoom.d.ts.map