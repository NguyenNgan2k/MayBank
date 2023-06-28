import account from 'assets/img/nav/nav-khach-hang.svg';
import cash from 'assets/img/nav/nav-nv-tien.svg';
import customer from 'assets/img/nav/nav-khach-hang.svg';
import dashboard from 'assets/img/nav/nav-home.svg';
import report from 'assets/img/nav/nav-bao-cao.svg';
import stock from 'assets/img/nav/nav-nv-ck.svg';
import eod from 'assets/img/nav/nav-clock.svg';
import system from 'assets/img/nav/nav-ng-dung.svg';
import wallet from 'assets/img/nav/nav-right.svg';

const images: { [key: string]: any } = {
  account,
  cash,
  customer,
  dashboard,
  report,
  stock,
  eod,
  system,
  wallet,
};

function getImageByKey(key: string) {
  return images[key];
}

export default getImageByKey;
