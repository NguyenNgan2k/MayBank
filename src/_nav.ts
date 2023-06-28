export interface NavItems {
  name: string;
  url: string;
  icon: string;
  right: string[];
  children?:
    | {
        name: string;
        url: string;
        right: string[];
      }[]
    | undefined;
}

export const navItems: NavItems[] = [
  {
    name: "Trang chủ",
    url: "/home/dashboard",
    icon: "dashboard",
    right: ["ALL"],
  },
  {
    name: "Cầm đồ",
    url: "/home/cam-do",
    icon: "report",
    right: [
      "1001",
      "1002",
      "1003",
      "1004",
      "1005",
      "1006",
      "1007",
      "1008",
      "1009",
      "1010",
    ],
  },
  {
    name: "Tín chấp",
    url: "/home/tin-chap",
    icon: "cash",
    right: [
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
    ],
    // children: [
    //   {
    //     name: "Hợp đồng vay",
    //     url: "/home/tin-chap/list",
    //     right: ["ALL"],
    //   },
    //   {
    //     name: "HĐ đã trả gốc",
    //     url: "/home/tin-chap/liquid",
    //     right: ["ALL"],
    //   },
    // ],
  },
  {
    name: "Trả góp",
    url: "/home/tra-gop",
    icon: "stock",
    right: ["3001", "3002", "3003", "3004", "3005", "3006", "3007", "3008"],
  },
  {
    name: "Quản lý cửa hàng",
    url: "/home/shop",
    icon: "account",
    right: ["4001", "4002", "4003", "4004", "4005"],
    children: [
      {
        name: "Tổng quát chuỗi cửa hàng",
        url: "/home/shop/summary",
        right: ["4001"],
      },
      {
        name: "Thông tin chi tiết CH",
        url: "/home/shop/detail",
        right: ["4002"],
      },
      {
        name: "Danh sách cửa hàng",
        url: "/home/shop/list",
        right: ["4003"],
      },
      {
        name: "Cấu hình hàng hóa",
        url: "/home/shop/cargo",
        right: ["4005"],
      },
    ],
  },
  {
    name: "Quản lý thu chi",
    url: "/home/quan-ly-thu-chi",
    icon: "right",
    right: ["6001", "6002"],
    children: [
      {
        name: "Chi hoạt động",
        url: "/home/quan-ly-thu-chi/chi-hoat-dong",
        right: ["6001"],
      },
      {
        name: "Thu hoạt động",
        url: "/home/quan-ly-thu-chi/thu-hoat-dong",
        right: ["6002"],
      },
    ],
  },
  {
    name: "Quản lý nguồn vốn",
    url: "/home/nguon-von",
    icon: "wallet",
    right: [
      "7001",
      "7002",
      "7003",
      "7004",
      "7005",
      "7006",
      "7007",
      "7008",
      "7009",
    ],
  },
  {
    name: "Quản lý nhân viên",
    url: "/home/cust",
    icon: "customer",
    right: ["5001", "5002"],
    children: [
      {
        name: "Danh sách nhân viên",
        url: "/home/cust/list",
        right: ["5001"],
      },
      {
        name: "Phân quyền nhân viên",
        url: "/home/cust/right",
        right: ["5002"],
      },
    ],
  },
  // {
  //   name: "Thống kê",
  //   url: "/home/statistic",
  //   icon: "eod",
  //   right: ["ALL"],
  //   children: [
  //     {
  //       name: "Thu tiền vãy lãi",
  //       url: "/home/statistic/tin-chap",
  //       right: ["ALL"],
  //     },
  //     {
  //       name: "Thu tiền họ",
  //       url: "/home/statistic/tra-gop",
  //       right: ["ALL"],
  //     },
  //   ],
  // },
  {
    name: "Báo cáo",
    url: "/home/report",
    icon: "report",
    right: ["8001", "8002", "8003", "8004", "8005"],
    children: [
      {
        name: "Sổ quỹ tiền mặt",
        url: "/home/report/cash",
        right: ["8001"],
      },
      {
        name: "Tổng kết giao dịch",
        url: "/home/report/total-transaction",
        right: ["8002"],
      },
      {
        name: "Tổng kết lợi nhuận",
        url: "/home/report/gain-lost",
        right: ["8003"],
      },
      {
        name: "Chi tiết tiền lãi",
        url: "/home/report/chi-tiet-lai",
        right: ["8004"],
      },
      {
        name: "Báo cáo đang cho vay",
        url: "/home/report/dang-cho-vay",
        right: ["ALL"],
      },
      {
        name: "Báo cáo hàng chờ thanh lý",
        url: "/home/report/cho-thanh-ly",
        right: ["ALL"],
      },
      {
        name: "Báo cáo chuộc đồ, đóng HĐ",
        url: "/home/report/dong-hd",
        right: ["ALL"],
      },
      {
        name: "Báo cáo thanh lý đồ",
        url: "/home/report/thanh-ly-do",
        right: ["ALL"],
      },
      {
        name: "Báo cáo HĐ đã xóa",
        url: "/home/report/hd-da-xoa",
        right: ["ALL"],
      },
      {
        name: "Báo cáo tin nhắn",
        url: "/home/report/message",
        right: ["ALL"],
      },
      {
        name: "Dòng tiền theo ngày",
        url: "/home/report/cash-in-day",
        right: ["8005"],
      },
      {
        name: "Bàn giao ca",
        url: "/home/report/giao-ca",
        right: ["ALL"],
      },
    ],
  },
  // {
  //   name: "Hệ thống",
  //   url: "/home/system",
  //   icon: "system",
  //   right: ["ALL"],
  // },
];
