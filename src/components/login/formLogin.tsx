import RenderFieldInput from "components/input/renderFieldInput";
import { IUser } from "interface";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "reducers";
import {
  Field,
  formValueSelector,
  InjectedFormProps,
  reduxForm,
} from "redux-form";
import { required } from "utils/validation";
import IgCaptCha from "assets/img/bg/captcha.png";
import IcMobile from "assets/img/icon/ic_mobile.svg";
import Language from "components/language";

interface Props {
  isLoading?: boolean;
  errorMsg?: Error | string | null;
}

const FormLogin: React.FunctionComponent<InjectedFormProps<IUser> & Props> = (
  props,
) => {
  const history = useHistory();
  const { handleSubmit, isLoading, errorMsg } = props;


  function submit() {
    history.push("/home");
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="text-left bg-light w-[500px] m-auto"
    >
      <div className="w-[500px] absolute top-10 text-sm text-right cursor-pointer">
        <div className="flex justify-end items-enter">
          <img src={IcMobile} className="cursor-pointer" />
          <span className="text-base text-[#141ed2] font-bold mx-2">Hotline: <a className="cursor-pointer hover:text-back">1900 545 426</a></span>
          <Language />
        </div>
      </div>
      <p className="text-2xl">Chào mừng bạn đến với</p>
      <p className="text-4xl font-bold my-3 mb-2 text-blueGray-700">
        Công ty Chứng khoán
      </p>
      <label className="block mb-2">
        <span className="block text-base font-bold text-black">
          Tên đăng nhập
        </span>
        <Field
          name="username"
          type="text"
          className="p-3 bg-[#f2f2f2] border shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
          autoComplete="off"
          placeholder="TÊN ĐĂNG NHẬP"
          component={RenderFieldInput}
          validate={required}
        />
      </label>

      <label className="block mb-2">
        <span className="block text-base font-bold text-black">
          Nhập mật khẩu
        </span>
        <Field
          name="password"
          type="text"
          className="p-3 bg-[#f2f2f2] border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
          placeholder="NHẬP MẬT KHẨU"
          autoComplete="current-password"
          component={RenderFieldInput}
          validate={required}
        />
      </label>
      <div className="flex justify-between items-center">
        <img src={IgCaptCha} className="h-[46px]" />
        <Field
          name="formCaptcha"
          type="text"
          className="p-3 bg-[#f2f2f2] border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mx-2"
          placeholder="NHẬP MÃ KIỂM TRA"
          autoComplete="current-password"
          component={RenderFieldInput}
          validate={required}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#141ed2]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>

      </div>
      <div className="mt-8 w-full flex items-center justify-between">
        <button type="submit" className="bg-[#141ed2] p-2 w-full rounded-lg text-white font-bold" disabled={isLoading}>
          Đăng nhập
        </button>
      </div>
      <div className="w-[500px] absolute bottom-6 text-sm mx-4 text-center cursor-pointer">
        <a>Kết nối với chúng tôi</a>
        <span> | </span>
        <a>Điều khoản và điều kiện</a>
        <span> | </span>
        <a>An toàn bảo mật</a>
      </div>
    </form>
  );
};

const _FormLogin = reduxForm<IUser, Props>({
  form: "formLoginPawn",
  enableReinitialize: true,
})(FormLogin as any);

const selector = formValueSelector("formLoginPawn");

const makeMapStateToProps = () => {
  const mapStateToProps = (state: AppState) => {
    const { username, password } = selector(state, "username", "password");

    return {
      username,
      password,
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(_FormLogin);
