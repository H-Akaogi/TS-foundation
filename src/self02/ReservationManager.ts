import type { Reservable } from "./Reservable.js";
/**
 * 応用演習04 ReservationManager<T extends Reservable>
 */
export class ReservationManager<T extends Reservable> // Tは何でもいいけど、必ずReservableの条件を満たしてね
{
    private items: T[] = []; // T型のデータだけを入れられる配列

    /**
     * 受け取ったitemをitemsに追加するメソッド
     * @param item 
     */
    public add(item: T): void {
        this.items.push(item);
    }

    /**
     * 予約一覧表示メソッド
     */
    public showAll(): void {
        console.log("--- 予約対象一覧を表示します ---");
        /**
         * itemsから一つずつitemを取り出してprintReservationName()を実行
         */
        this.items.forEach(item => item.printReservationName());
    }
}