import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../../elems/Input";
import Button from "../../elems/Button";
import { __login, __kakaoLogin } from "../../redux/modules/loginSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formstate, setFormState] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const changeInput = (e) => {
    const { value, id } = e.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const loginState = await dispatch(__login(loginData));
    if (loginState.type === "log/LOGIN_LOG/rejected") {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
    if (loginState.payload.result) {
      alert(`${loginState.payload.nickname} 님 환영합니다 :) `);
      navigate("/");
    }
  };

  const submitKakaoLogin = async (e) => {
    e.preventDefault();
    const loginState = await dispatch(__kakaoLogin(loginData));
    if (loginState.type === "log/LOGIN_LOG/rejected") {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
    if (loginState.payload.result) {
      alert(`${loginState.payload.nickname} 님 환영합니다 :) `);
      navigate("/");
    }
  };

  React.useEffect(() => {
    if (loginData.email !== "" && loginData.password !== "") {
      setFormState(true);
    } else {
      setFormState(false);
    }
  }, [loginData]);

  return (
    <WrapForm onSubmit={submitLogin}>
      <Input
        id="email"
        type="email"
        placeholder="이메일을 입력"
        required
        onChange={changeInput}
      />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호 입력"
        required
        onChange={changeInput}
      />
      <Button
        type="submit"
        size="size1"
        bgcolor={formstate ? "blue" : "grey"}
        color={formstate ? "white" : "black"}
        disabled={!formstate}
      >
        로그인
      </Button>
      <Button
        onClick={submitKakaoLogin}
        type="submit"
        size="size1"
        bgcolor={"yellow"}
        color={"black"}
      >
        카카오 로그인
      </Button>
    </WrapForm>
  );
}

const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
