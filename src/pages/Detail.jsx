import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const post_list = useSelector((state) => state.post.list);
  const newPostData = post_list.filter((v) => v.id === Number(id));
  console.log(newPostData);
  console.log(post_list);

  return (
    <Layout>
      <StDetailLayOut>
        <StDetailContainer>
          <StTitleLayout>
            <h1>{newPostData[0].title}</h1>
          </StTitleLayout>
          <StWriterLayout>
            <span>{newPostData[0].nickname}</span>
            <p>{newPostData[0].craetedAt}</p>
          </StWriterLayout>
          <StUpdateLayout>
            <p>수정</p>
            <p>|</p>
            <p>삭제</p>
          </StUpdateLayout>
          <img
            src={`http://15.164.164.146${newPostData[0].image}`}
            alt={"test"}
          />
          <div>{newPostData[0].content}</div>
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
  img {
    margin: auto;
  }
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

  & > p {
    align-self: flex-start;
  }

  & > button {
    align-self: flex-end;
  }
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
