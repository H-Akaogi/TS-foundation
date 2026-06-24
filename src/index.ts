import type {
    ReservationData,
    CreateReservationRequest,
    UpdateReservationRequest,
    ReservationSummary
} from "./self02/ReservationTypes.js";
import { ValidationError } from "./chap05/ValidationError.js";

/**
 * 予約一覧の用意
 */
const reservations: ReservationData[] = [];

/**
 * 予約データの登録メソッド
 * @param newData 登録データ
 * @returns 
 */
function registerReservation(newData: CreateReservationRequest): ReservationData {
    const newId = `R${reservations.length + 1}`;
    const registeredData: ReservationData = {
        id: newId,
        ...newData
    };
    reservations.push(registeredData);
    return registeredData;
}

/**
 * 予約変更メソッド
 * @param id 予約ID
 * @param input IDを除く予約データ
 * @returns 
 */
function updateReservation(id: string, input: UpdateReservationRequest): ReservationData {
    const index = reservations.findIndex(x => x.id === id);
    if (index === -1) throw new ValidationError("IDに一致する予約が見つかりません");
    const updatedData: ReservationData = {
        ...reservations[index]!,
        ...input
    }
    reservations[index] = updatedData;
    return updatedData;
}

/**
 * 一覧表示用データ取得
 * @returns 
 */
function getReservationSummaries(): ReservationSummary[] {
    return reservations.map(x => ({
        id: x.id,
        guestName: x.guestName,
        status: x.status
    }));
}

/**
 * 動作確認用データ
 */
const reservation1 = registerReservation({
    guestName: "田中 花子",
    roomNo: "305",
    nights: 2,
    status: "reserved"
});

registerReservation({
    guestName: "鈴木 太郎",
    roomNo: "501",
    nights: 1,
    status: "reserved"
});

console.log("登録後:", reservations);

updateReservation(reservation1.id, {
    nights: 3,
    status: "checkedIn"
});

console.log("更新後:", reservations);

console.log("一覧表示用:", getReservationSummaries());