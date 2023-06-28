export interface IPawnList {
  PK_CONTRACT: number;
  C_CONTRACT_CODE: number;
  C_ACCOUNT_NAME: string;
  C_CONTENT: string;
  C_CREATE_TIME: string;
  C_TOTAL_RECORD: number;
}

export interface ITinChapList {
  PK_CC_CONTRACT: string;
  ROW_NUM: number;
  C_TOTAL_RECORD: number;
  C_CARD_ID: string;
  C_ASSET_TYPE: string | null;
  C_ASSET: string | null;
  C_CARD_ID_TYPE: string;
  C_CASH_VALUE: number;
  C_CASH_LOAN: number;
  C_CASH_PAYED: number;
  C_CASH_TOTAL: number;
  C_CONTRACT_CODE: string;
  C_COUNT_DAY: number;
  C_CREATE_TIME: string;
  C_CREATOR_CODE: string;
  C_CURRENT_VALUE: number;
  C_CUSTOMER_CODE: string;
  C_CUSTOMER_NAME: string;
  C_CUST_ADDRESS: string;
  C_CUST_EMAIL: string;
  C_CUST_MOBILE: string;
  C_EXPIRE_DATE: string;
  C_FEE_BASE: string;
  C_FEE_PAYED: number;
  C_FEE_PRE_FLAG: number;
  C_FEE_RATE: number;
  C_FEE_TERM: number;
  C_FEE_DAY: number; // phí theo ngày
  C_FEE_ONE_TERM: number; // phí theo 1 kỳ
  C_FEE_TYPE: string;
  C_FEE_OVER: number; // nợ cũ
  C_NEXT_DATE: string;
  C_ISSUE_DATE: string;
  C_ISSUE_PLACE: string;
  C_LIQUID_VALUE: number;
  C_OPEN_DATE: string;
  C_SALE_ID: string;
  C_STATUS: string;
  C_STATUS_NAME: string;
  C_SUB_BRANCH_CODE: string;
  C_CONTENT: string;
  C_CURRENT_FEE: number;    // lãi tính đến ngày hiện tại
  C_PAYMENT_DATE: string;   // ngày trả lãi tiếp theo
  C_CURRENT_DAY: string | number;   // số ngày lãi thực tế
}

export interface IStaffList {
  C_ADDRESS: string;
  C_AUTHOR_NAME: string;
  C_BACK_USER_CODE: string;
  C_BRANCH_CODE: string;
  C_CREATE_TIME: string;
  C_CREATOR_CODE: string;
  C_DESCRIPTION: string;
  C_EMAIL: string;
  C_ORDER: number;
  C_PASSWORD: string;
  C_PHONE_LINE: string;
  C_RESET_PWD_FLAG: number
  C_RIGHT_BY_ACCOUNT: string;
  C_RIGHT_BY_ACCOUNT_LIST: string;
  C_STATUS: number;
  C_SUB_BRANCH_CODE: string;
  C_SUB_BRANCH_NAME: string;
  C_TOTAL_RECORD: number
  C_USER_NAME: string;
  PK_USER: string;
}
export interface IRightList{
  C_CREATOR_CODE:string; 
  C_FUNCTION_CODE: string; 
  C_FUNCTION_NAME: string; 
  C_GROUP_CODE: string; 
  C_GROUP_NAME: string; 
}

export interface IListGroup{
  C_GROUP_CODE?: string; 
  C_GROUP_NAME?: string; 
}
export interface IRightUser{
C_ACCOUNT_UPDATE: string; 
C_ACCOUNT_UPDATE_LIST: string; 
C_APPROVE_ON_MONEY: string; 
C_BACK_USER_CODE: string; 
C_BRANCH_CODE: string; 
C_CHANGE_PASS_DATE: string; 
C_CREATE_TIME: string; 
C_CREATOR_CODE: string; 
C_DESCRIPTION: string; 
C_FRONT_USER_CODE: string; 
C_GROUP_RIGHT_LIST: string; 
C_IS_ADMIN: string; 
C_LOCK_FLAG: string; 
C_LOGIN_FAIL: string; 
C_LOGIN_TIME: string; 
C_ORDER: number; 
C_PASSWORD: string; 
C_PHONE_LINE: string; 
C_REPORT_BY_ACCOUNT: string; 
C_REPORT_BY_ACCOUNT_LIST: string; 
C_RESET_PWD_FLAG: number; 
C_RIGHT_BY_ACCOUNT: string; 
C_RIGHT_BY_ACCOUNT_LIST: string; 
C_RIGHT_BY_MANAGE: string; 
C_RIGHT_BY_MANAGE_LIST: string; 
C_STATUS: number; 
C_SUB_BRANCH_CODE: string; 
C_USER_MODE: string; 
C_USER_NAME: string; 
C_USER_POSITION: string; 
C_USER_TYPE: string; 
C_WEB_FUNC_LIST: string;  
PK_USER: string; 
}