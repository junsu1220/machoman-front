import React from "react";
import styled from "styled-components";

import LoginTop from "../components/login/LoginTop";
import SignUpForm from "../components/login/SingUpForm";

export default function SignUp() {
  return (
    <WrapSignBox>
      <LoginTop title="회원가입" />
      <SignUpForm />
    </WrapSignBox>
  );
}
const WrapSignBox = styled.div`
  width: 400px;
  height: 600px;
  margin: 100px auto;
  padding: 10px;
  background-color: var(--white);
`;
