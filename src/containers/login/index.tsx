import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ReactComponent as LogoText } from 'assets/img/logo/Van Bao.svg';
import FormLogin from "components/login/formLogin";
import { AppState } from "reducers";
import IgBgLogin from "assets/img/bg/back-ground-login.jpg"

interface Props {
}

function LoginPage(props: Props): JSX.Element {

  return (
    <div className="grid grid-cols-2">
      <img src={IgBgLogin} className="h-screen w-full" />
      <FormLogin />
    </div>
  );
}

const makeMapStateToProps = () => {

  const mapStateToProps = (state: AppState) => {
    return {

    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(LoginPage);
