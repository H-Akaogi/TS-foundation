import type { Reservable } from "./Reservable.js";
/**
 * 応用演習04 ReservationManager<T extends Reservable>
 */
export declare class ReservationManager<T extends Reservable> {
    private items;
    /**
     * 受け取ったitemをitemsに追加するメソッド
     * @param item
     */
    add(item: T): void;
    /**
     * 予約一覧表示メソッド
     */
    showAll(): void;
}
//# sourceMappingURL=ReservationManager.d.ts.map