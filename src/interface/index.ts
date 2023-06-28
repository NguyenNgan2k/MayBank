export interface INormalSelect {
  value: string | number | any;
  label: string;
  other?: any;
  right?: string[],
}

export interface IUser {
  username: string;
  password: string;
}

export interface IUserRegister {
  formBranchName: string;
  formCapital: string;
  formUserCode: string;
  formUserName: string;
  formPassword: string;
  formRePassword: string;
  formMobile: string;
  formEmail: string;
  formAddress: string;
}

export interface ICashHeader {
  C_SUB_BRANCH_CODE: string; // mã cửa hàng
  C_SUB_BRANCH_NAME: string; // tên cửa hàng
  C_CASH_BALANCE: number | string; // tiền mặt
  C_CASH_LENDING: number | string; // tiền cho vay
  C_CASH_LOAN: number | string;   // tiền nợ
  C_CASH_FEE: number | string;    // phí dự kiến
  C_CASH_FEE_PAYED: number | string;  // phí đã thu
}

export interface INewCamDo {
  formSubBranch: string;
  formCustName: string;
  formCustCardId: string;
  formCustIssuePlace: string;
  formCustIssueDate: string | null;
  formCustMobile: string;
  formCustAddress: string;
  formCategory: string; // loại tài sản
  formCategoryName: string | null; // tên tài sản
  formTotalMoney: string; // số tiền cầm
  formTypeInterest: string; // hình thức lãi
  formInterestBefore: boolean; // thu lãi trước
  formFeeAmount: string; //  lãi phí
  formFeeType: string; // loại lãi phí (k/ triệu hoặc k/ ngày)
  formFeeTerm: string; // kỳ lãi phí
  formContractDate: string | null; // ngày vay
  formContent: string; // ghi chú

  /** Thông tin tài sản */
  formExtend1: string | null;
  formExtend2: string | null;
  formExtend3: string | null;
}

export interface INewLoan {
  formSubBranch: string;
  formCustName: string;
  formCustCardId: string;
  formCustIssuePlace: string;
  formCustIssueDate: string | null;
  formCustMobile: string;
  formCustAddress: string;
  formCustCollateral: string; // tài sản thế chấp
  formTotalMoney: string; // số tiền vay
  formTypeInterest: string; // hình thức lãi
  formInterestBefore: boolean; // thu lãi trước
  formFeeAmount: string; // lãi
  formFeeType: string; // loại lãi (k/ triệu hoặc k / ngày)
  formFeeTerm: string; // kỳ tính lãi
  formCountDay: string; // số ngày vay
  formContractDate: string | null; // ngày vay
  formContent: string;
}

export interface INewLoanLiquid {
  formDate: string;
  formLiquidAmount: string;
  formContent: string;
}

export interface IThanhToanNo {
  formThanhToanAmount: string;
  formGhiNoAmount: string;
  formType: string;
}

export interface INewLoanReverse {
  formDate: string;
  formContractAmount: string;
  formRealAmount: string;
  formCountDay: string;
  formTerm: string;
}

export interface ILoanExtend {
  formExtendDate: string;
  formCountDay: string;
  formContent: string;
}

export interface INewPiece {
  formSubBranch: string; // chi nhánh
  formCustName: string;
  formCustCardId: string;
  formCustIssuePlace: string;
  formCustIssueDate: string | null;
  formCustMobile: string;
  formCustAddress: string;
  formTotalMoney: string; // số tiền vay
  formReceiveMoney: string; // số tiền vay
  formAroundDay: string; // vay trong vòng bao nhiêu ngày
  formFeeTerm: string; // kỳ tính lãi
  formContractDate: string | null; // ngày vay
  formInterestBefore: boolean; // thu lãi trước
  formCashier: string; // nhân viên thu tiền
  formContent: string;
}

export interface INewPayment {
  formSubBranch: string; // cửa hàng
  formCustName: string; // người nôpk / người chi
  formAmount: string; // số tiền
  formPaymentType: string; // Loại phiếu chi
  formContent: string; // lý do
}

export interface ParamModel {
  cmd: string;
  user: string;
  session: string;
  group: string;
  checksum?: string;
  data: any;
}

export interface INewNhanVien {
  formShop: string;
  formCode: string;
  formPass: string;
  formRePass: string;
  formFullName: string;
  formMobile: string;
  formAddress: string;
  formStatus: string;
}

export interface INewSHop {
  formShopName: string;
  formTotalMoney: string;
  formAddress: string;
  formMobile: string;
  formAuthor: string;
  formContent: string;
  formStatus: string;
}