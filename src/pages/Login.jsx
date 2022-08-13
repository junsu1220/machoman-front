import React from "react";
import styled from "styled-components";

import LoginTop from "../components/login/LoginTop";
import LoginBottom from "../components/login/LoginBottom";
import LoginForm from "../components/login/LoginForm";
import logo from "../src_assets/logo.png";

export default function Login() {
  return (
    <WrapLoginBox>
      <LoginTop title="로그인" />
      <WrapLogo>
        <LogoImg src={logo} alt="" />
      </WrapLogo>
      <LoginForm />
      <LoginBottom />
    </WrapLoginBox>
  );
}

const WrapLoginBox = styled.div`
  width: 400px;
  height: 600px;
  margin: 80px auto;
  padding: 10px;
  background-color: var(--white);
  border-radius: 10px;
`;
const WrapLogo = styled.div`
  margin: 0 auto;
  object-fit: cover;
  margin-bottom: 25px;
  width: 70%;
  height: 200px;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
