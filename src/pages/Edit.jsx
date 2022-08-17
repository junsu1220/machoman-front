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
            <input ref={title_ref} placeholder="제목을 입력하세요." />
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
          <ImgSection>
            <input
              id="file-input"
              type="file"
              accept="img/*"
              ref={fileInput}
              onChange={selectImg}
              style={{ display: "none" }}
            />
            <div className="ImgDiv">
              <img
                src={attachment ? attachment : defaultImg1}
                alt="업로드할 이미지"
                className={attachment ? "default" : ""}
              />
            </div>
          </ImgSection>
          <textarea ref={text_ref} />
        </StDetailContainer>
        <StCommentContainer>
          <button>
            <label htmlFor="file-input">파일선택</label>
          </button>
          <button onClick={addPost}>수정하기</button>
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
`;

const StDetailContainer = styled.div`
  width: 750px;
  border: 4px solid darkgray;
  border-radius: 5px;
  margin: auto;

  margin-top: 80px;
  text-align: left;

  textarea {
    width: 89%;
    height: 300px;
    max-height: 100vh;
    font-size: 16px;
    margin-bottom: 20px;
    margin-left: 35px;
    opacity: 70%;
    padding: 10px;
  }
`;

const StTitleLayout = styled.div`
  text-align: left;
  padding: 40px;
  padding-top: 30px;
  padding-bottom: 10px;
  color: white;
  input {
    width: 100%;
    border: none;
    resize: none;
    opacity: 100%;
    color: white;
    background-color: #1f1e1e;
    font-size: 30px;
    font-weight: 700;
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

  & > p {
    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  }
`;

const ImgSection = styled.div`
  display: flex;
  flex-direction: column;
  label {
    cursor: pointer;
  }
  .ImgDiv {
    width: 89%;
    height: 400px;
    margin-top: 15px;
    margin-bottom: 30px;
    border-radius: 16px;
    margin-left: 35px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    img.default {
      flex: 1 1 auto;
    }
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

const StCommentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row;
  margin-top: 30px;
  margin-bottom: 50px;
  gap: 10px;
  color: darkgray;
  width: 750px;
  & > button {
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

export default Post;
