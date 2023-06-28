export const required = (value: any) =>
  value ? undefined : 'Vui lòng nhập đủ thông tin';

export const lengthRequired = (length: number) => (value: any) =>
  value && value.length === length ? undefined : `Độ dài ${length} ký tự`;

export const maxLength = (max: number) => (value: any) =>
  value && value.length > max ? `Độ dài tối đa ${max} ký tự` : undefined;

export const minLength = (min: number) => (value: any) =>
  value && value.length < min ? `Độ dài tối thiểu ${min} ký tự` : undefined;

export const number = (value: any) =>
  value && isNaN(Number(value)) ? 'Hãy nhập số' : undefined;

export const validatePhone = (value: any) => {
  if (!value) return;

  let vnf_regex = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
  const _value = value.replace(/ /g, '');
  if (!_value || (vnf_regex.test(_value) && _value.indexOf('_') < 0))
    return undefined;

  return 'Định dạng SĐT không đúng';
};

export const validateBirth = (value: any) => {
  if (!value) return;

  let vnf_regex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  // console.log(vnf_regex.test(value))
  if (!value || (vnf_regex.test(value) && value.indexOf('_') < 0))
    return undefined;

  return 'Định dạng ngày tháng không đúng';
};

export const validateEmail = (value: any) => {
  if (!value) return;
  var re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!value || re.test(value)) return undefined;

  return 'Định dạng Email không đúng';
};

export const validateNumber = (min: number, max: number) => (value: any) =>
  Number(value) < min
    ? `Giá trị trong khoảng [${min} - ${max}]`
    : Number(value) > max
    ? `Giá trị trong khoảng [${min} - ${max}]`
    : undefined;

export const validateNumberExact = (value: any) =>
  Number(value) <= 0 ? `Nhập số > 0` : undefined;

  
export const noWhiteSpace = (value: any) => {
  if (!value) return;

  var reWhiteSpace = new RegExp("\\s+");
  if (!reWhiteSpace.test(value))
    return undefined;

  return 'Không gồm khoảng trắng';
};
