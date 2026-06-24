import type { Reservable } from "./Reservable.js";
import { ValidationError } from "../chap05/ValidationError.js";

/**
 * 応用演習03 MeetingRoomクラス
 */
export class MeetingRoom implements Reservable {

    private readonly _roomId: string;
    private _name: string = "";
    private _capacity: number = 0;

    /**
     * コンストラクタ
     * @param roomId 会議室ID
     * @param name 会議室名
     * @param capacity 定員
     */
    constructor(roomId: string, name: string, capacity: number) {
        if (!roomId) throw new ValidationError("会議室IDは必須です");
        this._roomId = roomId;
        this.updateName(name);
        this.validateCapacity(capacity);
    }

    /**
     * 会議室名変更メソッド
     * @param name 会議室名
     */
    private updateName(name: string): void {
        if (!name) throw new ValidationError("会議室名は必須です");
        this._name = name;
    }

    /**
     * 定員チェックメソッド
     * @param capacity 定員
     */
    private validateCapacity(capacity: number): void {
        if (capacity < 1) throw new ValidationError("定員は1人以上で入力してください");
        this._capacity = capacity;
    }

    /**
     * Getter
     */
    public get roomId(): string {
        return this._roomId;
    }
    public get name(): string {
        return this._name;
    }
    public get capacity(): number {
        return this._capacity;
    }

    /**
     * インターフェース実装
     */
    public printReservationName(): void {
        console.log(`会議室予約: ${this.name} / 定員: ${this.capacity}人`);
    }
}