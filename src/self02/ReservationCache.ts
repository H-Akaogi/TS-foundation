import type { ReservationData } from "./ReservationTypes.js";
/**
 * 応用演習09 Recordを使った予約キャッシュ
 */

/**
 * 予約Idをキー、予約データを値にする型を作る
 */
type ReservationMap = Record<string, ReservationData>;

/**
 * reservationCache
 */
const reservationCache: ReservationMap = {
    "R001": {
        id: "R001",
        guestName: "田中 花子",
        roomNo: "305",
        nights: 2,
        status: "reserved"
    },
    "R002": {
        id: "R002",
        guestName: "鈴木 太郎",
        roomNo: "501",
        nights: 1,
        status: "checkedIn"
    }
};

function findReservation(id: string): void {
    const reservation = reservationCache[id];
    if (reservation) {
        console.log(`✅ 見つかりました: [${id}] ${reservation.guestName} さん / 部屋: ${reservation.roomNo} / 状態: ${reservation.status}`)
    }
    else {
        console.log(`❌ ${id} の予約は見つかりませんでした。`);
    }
}
findReservation("R001");
findReservation("R999");