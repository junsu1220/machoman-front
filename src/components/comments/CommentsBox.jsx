import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import { __addComment, __loadPost } from "../../redux/modules/commentSlice";
import { customAlphabet } from "nanoid";
import { useParams } from "react-router-dom";


const CommentsBox = () => {

    const nanoid = customAlphabet("0123456789abcdef", 6);
    const dispatch = useDispatch();
    const {id} = useParams();
    // const [inputvalue, setInputValue] = useState();
    
    const comment_ref = React.useRef("");
    const getCommentList = useSelector((state) => state.comment)
    console.log(getCommentList)


    useEffect(() => {
      dispatch(__loadPost(id));
    }, []);


    console.log(comment_ref.current.value)
    const addComment = () => {
        
        dispatch(__addComment({
          comment: comment_ref.current.value,
          id: id
        }));
    }

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
        <StCommentTextArea ref={comment_ref}/>
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
