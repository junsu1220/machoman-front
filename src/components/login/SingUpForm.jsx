import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../../elems/Input";
import Button from "../../elems/Button";
import {
  changeCheckName,
  changeCheckNick,
  __checkNickname,
  __checkUsername,
  __signup,
} from "../../redux/modules/signupSlice";

export default function SignUpForm() {
  const checkName = useSelector((state) => state.signup.checkName);
  const checkNick = useSelector((state) => state.signup.checkNick);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formstate, setFromState] = useState(false);
  const [signData, setSignData] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const email = checkName;
  const nick = checkNick;
  const [pw, setPw] = useState(false);

  const changeInput = (e) => {
    const { value, id } = e.target;
    setSignData({ ...signData, [id]: value });
    if (id === "email") dispatch(changeCheckName());
    if (id === "nickname") dispatch(changeCheckNick());
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(signData);
    const checkState = await dispatch(__signup(signData));
    if (checkState.payload) {
      navigate("/login");
    }
  };

  const CheckId = () => {
    if (
      signData.email.indexOf(".") !== -1 &&
      signData.email.indexOf("@") !== -1
    ) {
      dispatch(__checkUsername(signData.email));
    } else {
      alert("이메일 형식으로 작성해주세요");
    }
  };
  const CheckNick = () => {
    dispatch(__checkNickname(signData.nickname));
  };

  React.useEffect(() => {
    if (
      signData.passwordCheck === signData.password &&
      signData.password !== ""
    ) {
      setPw(true);
    } else {
      setPw(false);
    }
  }, [signData]);

  React.useEffect(() => {
    if (email && nick && pw) {
      setFromState(true);
    } else {
      setFromState(false);
    }
  }, [email, nick, pw]);

  return (
    <WrapForm onSubmit={submitLogin}>
      <WrapInputLabel>
        <div>
          <span>
            아이디(e-mail)
            <CheckText color={email ? "blue" : "red"}>
              {email ? "중복 확인" : "중복 확인을 해주세요"}
            </CheckText>
          </span>

          <CheckBtn onClick={CheckId}>중복 확인</CheckBtn>
        </div>
        <Input
          id="email"
          type="email"
          placeholder="이메일 주소를 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <WrapInputLabel>
        <div>
          <span>
            닉네임
            <CheckText color={nick ? "blue" : "red"}>
              {nick ? "중복 확인" : "중복 확인을 해주세요"}
            </CheckText>
          </span>

          <CheckBtn onClick={CheckNick}>중복 확인</CheckBtn>
        </div>
        <Input
          id="nickname"
          placeholder="닉네임을 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <WrapInputLabel>
        <span>비밀번호</span>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <WrapInputLabel>
        <span>
          비밀번호 확인
          <CheckText color={pw ? "blue" : "red"}>
            {pw ? "비밀 번호가 일치합니다" : "비밀 번호가 일치하지 않습니다"}
          </CheckText>
        </span>

        <Input
          id="passwordCheck"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <Button
        type="submit"
        size="size1"
        bgcolor={formstate ? "blue" : "grey"}
        color={formstate ? "white" : "black"}
        disabled={!formstate}
      >
        회원가입 완료
      </Button>
    </WrapForm>
  );
}

const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const WrapInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
`;

const CheckBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  float: right;
  border-radius: 10px;
  background-color: var(--grey);
  cursor: pointer;
  font-size: 13px;
`;

const CheckText = styled.span`
  margin-left: 20px;
  color: ${({ color }) => color};
  font-size: 10px;
`;
