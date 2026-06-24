/**
 * 応用演習04 ReservationManager<T extends Reservable>
 */
export class ReservationManager {
    items = []; // T型のデータだけを入れられる配列
    /**
     * 受け取ったitemをitemsに追加するメソッド
     * @param item
     */
    add(item) {
        this.items.push(item);
    }
    /**
     * 予約一覧表示メソッド
     */
    showAll() {
        console.log("--- 予約対象一覧を表示します ---");
        /**
         * itemsから一つずつitemを取り出してprintReservationName()を実行
         */
        this.items.forEach(item => item.printReservationName());
    }
}
//# sourceMappingURL=ReservationManager.js.map