import _ from "lodash";
import { ParamModel } from "../interface";

export function replaceAll(
  str: string | undefined,
  find: string,
  replace: string = "",
): string {
  if (!str) return "";

  return str.replace(new RegExp(find, "g"), replace);
}

export function addZero(i: string) {
  if (Number(i) < 10) {
    i = "0" + i;
  }
  return i;
}

function pick(...manyMoreArgs: any[]) {
  let a = manyMoreArgs,
    c,
    r,
    u = a.length;
  for (c = 0; c < u; c++)
    if (((r = a[c]), void 0 !== r && null !== r)) return r;
}

export function numberFormat(
  h: string | number,
  c: number = 0,
  t: string = "",
  r: any = undefined,
  u: any = undefined,
) {
  if (h === "ATO" || h === "ATC") return h;
  h = +h || 0;
  c = +c;
  let w: number | string = (h.toString().split(".")[1] || "").split("e")[0]
      .length,
    n,
    g,
    d = h.toString().split("e");

  g = (
    Math.abs(d[1] ? Number(d[0]) : h) + Math.pow(10, -Math.max(c, w) - 1)
  ).toFixed(c);
  w = String(parseInt(g, 10));
  n = 3 < w.length ? w.length % 3 : 0;
  r = pick(r, ".");
  u = pick(u, ",");
  h = (0 > h ? "-" : "") + (n ? w.substr(0, n) + u : "");
  h += w.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + u);
  c && (h += r + g.slice(-c));
  d[1] && 0 !== +h && (h += "e" + d[1]);
  if (Number(h) == 0) return t;
  return h;
}

export function StringToInt(pString: string | number | any): number {
  pString = "" + pString;
  pString = pString.replace(/,/g, "");
  let vInt = parseInt(pString, 10);
  if (isNaN(vInt)) {
    return 0;
  } else {
    return vInt;
  }
}

export function stringToDate(idata: string | null | undefined, format = "ymd") {
  if (!idata) return null;

  console.log(idata);

  let slack: string = "",
    slack1 = "/",
    slack2 = "-";

  if (idata.includes(slack1)) slack = slack1;
  if (idata.includes(slack2)) slack = slack2;

  console.log("stringToDate", idata);
  try {
    const _date = idata.split(slack);
    if (format === "ymd") {
      let y = _date[0];
      let m = addZero(_date[1]);
      let d = addZero(_date[2]);
      let st = new Date(y + "/" + m + "/" + d);
      console.log(st);
      return st;
    } else {
      let y = _date[2];
      let m = addZero(_date[1]);
      let d = addZero(_date[0]);
      let st = new Date(y + "/" + m + "/" + d);
      console.log(st);
      return st;
    }
  } catch (error) {
    return null;
  }
}

export function formatDate(
  idata: number | string | Date | null,
  slack = ":",
  _fm = "ymd",
) {
  if (!idata) return;

  let y: number, m: string, d: string;

  // console.log('formatDate', idata);

  try {
    if (typeof idata === "number" || typeof idata === "string") {
      let st: any;
      if (typeof idata === "number") st = new Date(idata);
      if (typeof idata === "string") st = new Date(replaceAll(idata, "/", "-"));

      y = st.getFullYear();
      m = addZero(st.getMonth() + 1 + "");
      d = addZero(st.getDate() + "");
    } else {
      y = idata.getFullYear();
      m = addZero(idata.getMonth() + 1 + "");
      d = addZero(idata.getDate() + "");
    }
    if (_fm === "ymd") {
      return y + slack + m + slack + d;
    } else {
      return d + slack + m + slack + y;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function diff2Date(date1: string | Date, date2: string | Date) {
  if (!date1 || !date2) return -1;
  // console.log(date1, date2);
  let mydate1: Date, mydate2: Date;
  if (typeof date1 === "string") {
    let parts1 = replaceAll(date1, "-", "/").split("/");
    mydate1 = new Date(
      Number(parts1[2]),
      Number(parts1[1]) - 1,
      Number(parts1[0]),
    );
  } else {
    mydate1 = new Date(
      Number(date1.getFullYear()),
      Number(date1.getMonth() - 1),
      Number(date1.getDay()),
    );
  }
  if (typeof date2 === "string") {
    let parts2 = replaceAll(date2, "-", "/").split("/");
    // console.log(parts2)
    mydate2 = new Date(
      Number(parts2[2]),
      Number(parts2[1]) - 1,
      Number(parts2[0]),
    );
  } else {
    mydate2 = new Date(
      Number(date2.getFullYear()),
      Number(date2.getMonth() - 1),
      Number(date2.getDay()),
    );
  }

  var diff = Math.floor(
    (mydate1.getTime() - mydate2.getTime()) / (1000 * 60 * 60 * 24),
  );

  // console.log(mydate1, mydate2);

  return diff || 0;
}

export function checkHasActByFunc(funcCode: string[], rightList: string[]) {

  if (_.some(funcCode, (o) => o === "ALL")) return true;
  const _boFunc = _.find(rightList, (o) =>
    _.some(funcCode, (k) => k === o)
  );
  // console.log('checkck',funcCode,rightList,_boFunc)
  if(_boFunc) return true;
  return false;
}

export function renderParams(token: any, params: any, group = "LIST") {
  let _msg: ParamModel = {
    user: "",
    session: "",
    group: "",
    cmd: "",
    data: {},
  };

  _msg.cmd = params["cmd"] || "";
  _msg.user = token?.user || "";
  _msg.session = token?.session || "";
  _msg.group = group;

  // remove param cmd
  delete params["cmd"];

  _msg.data = params;

  return _msg;
}

export function getTextFeeType(feeType: string, feeBase?: string): string {
  if (feeType === "DAY") {
    if (feeBase === "DAY") return "k/ngày";

    return "k/triệu";
  }

  if (feeType === "MONTH" || feeType === "MONTH_DK") return "%/tháng";
  if (feeType === "WEEK") return "%/tuần";
  if (feeType === "WEEK_K") return "k/tuần";

  return "";
}

export function getTextFeeTerm(feeType: string): string {
  if (feeType === "DAY") {
    return "ngày";
  }

  if (feeType === "MONTH" || feeType === "MONTH_DK") return "tháng";
  if (feeType === "WEEK" || feeType === "WEEK_K") return "tuần";

  return "";
}

export function setDateBuyType(
  dat1: string,
  count: number,
  feeType: string,
): string {
  // console.log(dat1, count);

  const _date: Date | null = stringToDate(dat1, "dmy");

  let _count = count;

  if (feeType === "MONTH" || feeType === "MONTH_DK") {
    _date?.setMonth(_date.getMonth() - count);
  } else if (feeType === "WEEK" || feeType === "WEEK_K") {
    _count = 7 * count;
    _date?.setDate(_date.getDate() - _count);
  } else {
    _date?.setDate(_date.getDate() - _count);
  }
  return formatDate(_date, "/", "dmy") || "";
}

export function findAll(id:string, items: Array<any>){
  var i = 0,
    found,
    result:Array<any> = [];

  for (; i < items.length; i++) {
    if (items[i].url === id) {
      result.push(items[i]);
    } else if (_.isArray(items[i].children)) {
      found = findAll(id, items[i].children);
      if (found?.length) {
        result = result.concat(found);
      }
    }
  }
  return result;
}