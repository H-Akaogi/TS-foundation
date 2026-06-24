import type { ReservationData, CreateReservationRequest } from "./ReservationTypes.js";

function registerReservation(newData: CreateReservationRequest): ReservationData {
    const newId = "R999";

    const registeredData: ReservationData = {
        id: newId,
        ...newData
    };

    console.log(`✅ 新規予約 [${newId}] を登録しました:`, registeredData);

    return registeredData;
}

registerReservation({
    guestName: "田中 花子",
    roomNo: "305",
    nights: 2,
    status: "reserved"
});