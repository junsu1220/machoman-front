import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  return (
    <Layout>
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
            <p>수정</p>
            <p>|</p>
            <p>삭제</p>
          </StUpdateLayout>
          <div>이미지박스</div>
          <div>여기에 내용이 들어갑니다.</div>
        </StDetailContainer>
        <StCommentLayout>
          <StCommentBox>댓글 박스</StCommentBox>
        </StCommentLayout>
        <StCommentContainer>
          <p>댓글 0</p>
          <StCommentTextArea>asdf</StCommentTextArea>
          <StCommentBtn>등록</StCommentBtn>
        </StCommentContainer>
      </StDetailLayOut>
    </Layout>
  );
};

const StDetailLayOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  /* width: 935px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  /* background-color: black; */
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
`;

const StCommentLayout = styled.div`
  margin-top: 20px;
`;

const StCommentBox = styled.div`
  width: 750px;
  height: 100px;
  border: 4px solid darkgray;
  color: white;
`;

const StCommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 30px;
  gap: 10px;
  color: darkgray;
`;

const StCommentTextArea = styled.textarea`
  width: 750px;
  height: 80px;
`;

const StCommentBtn = styled.button`
  width: 100px;
  height: 30px;
`;

export default Detail;
