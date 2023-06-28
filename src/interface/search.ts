export interface IPawnSearch {
  contractCode: string; // mã hợp đồng
  customerName: string; // tên khách hàng
  fromDate: string; // từ ngày
  toDate: string; // đến ngày
  typeProduct: string; // loại sản phẩm
  contractStatus: string; // trạng thái hợp đồng
}

export interface ILoanSearch {
  contractCode: string; // mã hợp đồng
  customerName: string; // tên khách hàng
  fromDate: string; // từ ngày
  toDate: string; // đến ngày
  contractStatus: string; // trạng thái hợp đồng
}

export interface IPieceSearch {
  contractCode: string; // mã hợp đồng
  customerName: string; // tên khách hàng
  fromDate: string; // từ ngày
  toDate: string; // đến ngày
  aroundDay: string; // thời gian vay
  contractStatus: string; // trạng thái hợp đồng
  page: string; // trang
}

export interface IIncomeExpendSearch {
  contractCode: string; // mã hợp đồng
  customerName: string; // tên khách hàng
  fromDate: string; // từ ngày
  toDate: string; // đến ngày
  aroundDay: string; // thời gian vay
  contractStatus: string; // trạng thái hợp đồng
}

export interface IThuChiSearch {
  fromType: string;
  fromDate: string;
  toDate: string;
}

export interface IReport {
  formTypeProduct?: string;  // loại hình: Cầm đồ, tín chấp, trả góp
  formTypeAsset?: string;  // loại tài sản
  formCustomerName?: string;  // tên khách hàng
  formStaffCode?: string; // nhân viên
  formContractCode?: string; // mã hợp đồng
  formExecuteDate?: string; // ngày vay
  formFromDate?: string; // từ ngày
  formToDate?: string; // đến ngày
}

export interface INhanVienSearch {
  formStaffName?:string; // tên nhân viên
  formShop?:string; // cửa hàng
  formStaffStatus?: string; // Tình trạng nhân viên
}