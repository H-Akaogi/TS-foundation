/**
 * 応用演習5 Omit を使った予約登録リクエスト
 * 応用演習6 Partial を使った予約更新リクエスト
 * 応用演習7 Pick を使った予約一覧表示用の型
 * 応用演習8 登録・更新・一覧表示の関数を作る総合問題
 */

/**
 * 予約状態
 */
export type ReservationStatus = "reserved" | "checkedIn" | "cancelled";

/**
 * 予約データ
 */
export interface ReservationData {
    id: string;
    guestName: string;
    roomNo: string;
    nights: number;
    status: ReservationStatus;
}

/**
 * ReservationDataからidを除いた型を作成【Omit】
 */
export type CreateReservationRequest = Omit<ReservationData, "id">;
/**
 * ReservationDataからidを除き、残りをすべて任意にした型を作成【Partial + Omit】
 */
export type UpdateReservationRequest = Partial<Omit<ReservationData, "id">>;
/**
 * ReservationDataから一覧表示に必要な項目だけを選んだ型を作成【Pick】
 */
export type ReservationSummary = Pick<ReservationData, "id" | "guestName" | "status">;