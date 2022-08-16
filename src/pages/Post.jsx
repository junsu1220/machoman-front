import React, { useRef, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useBeforeunload } from "react-beforeunload";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";
import defaultImg1 from "../src_assets/defaultImg1.png";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hastList, setHashList] = useState([]);
  const title_ref = React.useRef(null);
  const select_ref = React.useRef(null);
  const text_ref = React.useRef(null);
  const postList = useSelector((state) => state.post);

  const fileInput = useRef(null);

  const [attachment, setAttachment] = useState("");

  const selectImg = (e) => {
    const reader = new FileReader();
    const theFile = fileInput.current.files[0];
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
      const {
        currentTarget: { result },
      } = finishiedEvent;
      setAttachment(result);
    };
  };

  const addPost = () => {
    const formData = new FormData();

    formData.append("image", fileInput.current.files[0]);
    formData.append("title", title_ref.current.value);
    formData.append("content", text_ref.current.value);
    console.log("formData", formData);

    dispatch(__addPost(formData));
    navigate("/");
  };

  return (
    <Layout>
      <StDetailLayOut>
        <StDetailContainer>
          <StTitleLayout>
            {" "}
            <textarea ref={title_ref} placeholder="제목을 입력하세요." />
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
          {/* pjs-in */}
          <ImgSection>
            <button>
              <label htmlFor="file-input">파일선택</label>
            </button>
            <input
              id="file-input"
              type="file"
              accept="img/*"
              ref={fileInput}
              onChange={selectImg}
              style={{ display: "none" }}
            />
            <img
              src={attachment ? attachment : defaultImg1}
              alt="업로드할 이미지"
            />
          </ImgSection>
          {/* pjs-out */}
          <textarea ref={text_ref} className="textIpt" placeholder="내용입력" />
        </StDetailContainer>
        <StCommentLayout>
          <StCommentBox>댓글 박스</StCommentBox>
        </StCommentLayout>
        <StCommentContainer>
          <p>댓글 0</p>
          <StCommentTextArea>asdf</StCommentTextArea>
          <button onClick={addPost}>작성하기</button>
        </StCommentContainer>
      </StDetailLayOut>
    </Layout>
  );
};

const ImgSection = styled.div`
  display: flex;
  flex-direction: column;
  label {
    cursor: pointer;
  }
  img {
    width: 89%;
    height: 400px;
    margin-bottom: 30px;
    border-radius: 16px;
    margin-left: 35px;
  }
  button {
    width: 100px;
    height: 36px;
    margin-bottom: 20px;
    font-size: 14px;
    background-color: #000000;
    border: none;
    border-radius: 7px;
    color: white;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background-color: #666666;
    }
  }
`;

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
  border: 4px solid darkgray;
  border-radius: 5px;
  margin: auto;

  margin-top: 80px;
  text-align: left;

  textarea.textIpt {
    width: 89%;
    height: 300px;
    max-height: 100vh;
    font-size: 14px;
    margin-bottom: 20px;
    margin-left: 35px;
    opacity: 70%;
  }
  button {
    margin: 30px 0px 10px 10px;
    position: relative;
    left: 320px;
    width: 100px;
    height: 40px;
    border: 2px solid white;
    border-radius: 10px;
    background-color: transparent;
    color: white;
  }
`;

const StTitleLayout = styled.div`
  text-align: left;
  padding: 40px;
  padding-top: 30px;
  padding-bottom: 10px;
  color: white;
  textarea {
    width: 99%;
    border: none;
    resize: none;
    opacity: 70%;
  }
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
  button {
    width: 100px;
    height: 40px;
    margin-bottom: 20px;
    font-size: 14px;
    border: 2px solid white;
    border-radius: 10px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background-color: #666666;
    }
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

export default Post;
