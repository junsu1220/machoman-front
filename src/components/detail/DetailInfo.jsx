import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const DetailInfo = () => {
  const post = useSelector((state) => state.post);
  const navigate = useNavigate();

  return (
    <StDetailLayOut>
    <StDetailContainer>
        <StTitleLayout>
        <h1>title</h1>
        </StTitleLayout>
        <StWriterLayout>
        <span>작성자:</span>
        <p>2022. 08. xx. 00:00</p>
        </StWriterLayout>
        <StUpdateLayout>
            <p
              onClick={() => {
                navigate("/edit");
              }}
            >
              수정
            </p>
            <p>|</p>
            <p>삭제</p>
          </StUpdateLayout>
        <div>이미지박스</div>
        <div>여기에 내용이 들어갑니다.</div>
    </StDetailContainer>
    </StDetailLayOut>
  );
};

const StDetailLayOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const StDetailContainer = styled.div`
  width: 750px;
  height: 500px;
  border: 4px solid darkgray;
  border-radius: 5px;
  margin-top: 80px;
`;

const StTitleLayout = styled.div`
  text-align: left;
  padding: 40px;
  padding-top: 30px;
  padding-bottom: 10px;
  color: white;
`;

const StWriterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  padding-top: 0px;
  padding-bottom: 10px;
  color: white;
`;

const StUpdateLayout = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 40px;
  color: white;

  & > p {
    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  }
`;


export default DetailInfo;
