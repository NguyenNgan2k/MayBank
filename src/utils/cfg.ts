import { INormalSelect } from '../interface';

export default class BaseConfig {
  private _baseUrl: string | undefined;
  private _socketUrl: string | undefined;

  public get baseUrl() {
    return this._baseUrl || '';
  }

  public set baseUrl(theUrl: string) {
    this._baseUrl = theUrl;
  }

  public get socketUrl() {
    return this._socketUrl || '';
  }

  public set socketUrl(theUrl: string) {
    this._socketUrl = theUrl;
  }

  public getFullConfig(): any {
    return {
      baseUrl: this._baseUrl,
      socketUrl: this._socketUrl,
    };
  }
}

// trạng thái cầm đồ
export const AllCashTransType: Array<INormalSelect> = [
  { label: 'Thu', value: 'CC_INCOME' },
  { label: 'Chi', value: 'CC_EXPENSE' },
  { label: 'Vay thêm', value: 'CC_ADD_MORE' },
  { label: 'Tiền phí', value: 'CASH_FEE' },
  { label: 'Tiền thêm khi Đóng/chuộc đồ', value: 'CC_CLOSE' },
  { label: 'Tiền thanh lý', value: 'CC_LIQUID' },
  { label: 'Tiền trả định kỳ - Trả góp', value: 'CASH_PAY' },
  { label: 'Tiền giải ngân khi tạo HĐ', value: 'CC_CONTRACT' },
];

export const AllPawnStatus: Array<INormalSelect> = [
  { label: 'Chậm lãi', value: 'CHAM_LAI' },
  { label: 'Trễ hạn', value: 'TRE_HAN' },
  { label: 'Chờ thanh lý', value: 'CHO_THANH_LY' },
  { label: 'Đã thanh lý', value: 'DA_THANH_LY' },
  { label: 'Đã chuộc', value: 'DA_CHUOC' },
  { label: 'Đã xóa', value: 'DA_XOA' },
];

// trạng thái tín chấp
export const AllLoanStatus: Array<INormalSelect> = [
  { label: 'Đúng hẹn', value: 'DUNG_HEN' },
  { label: 'Quá hạn', value: 'QUA_HAN' },
  { label: 'Chậm lãi', value: 'CHAM_LAI' },
  { label: 'Nợ xấu', value: 'NO_XAU' },
  { label: 'Đã kết thúc', value: 'DA_KET_THUC' },
  { label: 'Đã xóa', value: 'DA_XOA' },
];

// trạng thái trả góp
export const AllPieceStatus: Array<INormalSelect> = [
  { label: 'Đúng hẹn', value: 'DUNG_HEN' },
  { label: 'Chậm họ', value: 'CHAM_HO' },
  { label: 'Quá hạn', value: 'QUA_HAN' },
  { label: 'Nợ xấu', value: 'NO_XAU' },
  { label: 'Đã kết thúc', value: 'DA_KET_THUC' },
  { label: 'Đã xóa', value: 'DA_XOA' },
  { label: 'Mai đóng họ', value: 'MAI_DONG_HO' },
];

// loại tài sản cầm đồ
export const AllPawnAsset: Array<INormalSelect> = [
  { label: 'Xe máy', value: 'XE_MAY' },
  { label: 'Ô tô', value: 'O_TO' },
  { label: 'Điện thoại', value: 'DIEN_THOAI' },
  { label: 'Laptop', value: 'LAP_TOP' },
  { label: 'Vàng', value: 'VANG' },
];

// thời gian vay
export const AllTimeLoanPiece: Array<INormalSelect> = [
  { label: '40 ngày', value: 40 },
  { label: '50 ngày', value: 50 },
  { label: '60 ngày', value: 60 },
  { label: '100 ngày', value: 100 },
];

// phiếu chi
export const AllExpenditureType: Array<INormalSelect> = [
  { label: 'Chi khác', value: '1' },
  { label: 'Trả lương', value: '2' },
  { label: 'Trả lãi phí', value: '3' },
  { label: 'Chi tiêu dùng', value: '4' },
  { label: 'Chi trả quỹ', value: '5' },
  { label: 'Chi trả quỹ', value: '6' },
  { label: 'Tạm ứng', value: '7' },
  { label: 'Hoa hồng', value: '8' },
  { label: 'Chi vé', value: '9' },
  { label: 'Chi văn phòng', value: '10' },
];

// phiếu thu
export const AllIncomeType: Array<INormalSelect> = [
  { label: 'Thu khác', value: '1' },
  { label: 'Thu trả quỹ', value: '2' },
  { label: 'Thu tiền nợ', value: '3' },
  { label: 'Thu tiền ứng', value: '4' },
  { label: 'Thu tiền phạt', value: '5' },
  { label: 'Hoa hồng', value: '6' },
  { label: 'Thu vé', value: '7' },
];

// loại hình sản phẩm
export const AllTypeProduct: Array<INormalSelect> = [
  { label: 'Cầm đồ', value: 'CAM_DO' },
  { label: 'Vay lãi', value: 'VAY_LAI' },
  { label: 'Bát họ', value: 'BAT_HO' },
  { label: 'Nguồn vốn', value: 'NGUON_VON' },
  { label: 'Thu chi hoạt động', value: 'THU_CHI_HOAT_DONG' },
];
