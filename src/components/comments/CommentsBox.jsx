import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import { __addComment } from "../../redux/modules/commentSlice";
import { customAlphabet } from "nanoid";


const CommentsBox = () => {

    const nanoid = customAlphabet("0123456789abcdef", 6);
    const dispatch = useDispatch();    
    const getCommentList = useSelector((state) => state.post)
    console.log(getCommentList)

    const addComment = () => {
      const formData = new FormData();
      console.log("formData", formData);

      dispatch(__addComment(formData));
    };

  return (
    <StDetailLayOut>
    <StCommentLayout>
        <StCommentBox>
          <p>작성자: ㅇㅇ</p>
          <div>
            <p>내용 : </p>
            <p>몇 분전</p>
          </div>
        </StCommentBox>
    </StCommentLayout>
    <StCommentContainer>
        <p>댓글 0</p>
        <StCommentTextArea />
        <StCommentBtn onClick={(addComment)}>등록</StCommentBtn>
    </StCommentContainer>
    </StDetailLayOut>
  ) 
};

const StDetailLayOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const StCommentLayout = styled.div`
  margin-top: 20px;
`;

const StCommentBox = styled.div`
  width: 750px;
  height: 100px;
  border: 4px solid darkgray;
  color: white;
  padding: 15px;

  & > div {
    display: flex;
    justify-content: space-between;
  }
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
  margin-bottom: 40px;
`;

export default CommentsBox;
