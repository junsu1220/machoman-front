import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post_list = useSelector((state) => state.post.list);
  const newPostData = post_list.filter((v) => v.id === Number(id));
  console.log(newPostData);
  console.log(post_list);

  return (
    <StDetailLayOut>
      <StDetailContainer>
        <StTitleLayout>
          <h1>{newPostData[0].title}</h1>
        </StTitleLayout>
        <StWriterLayout>
          <span>작성자: {newPostData[0].nickname}</span>
          <p>{newPostData[0].craetedAt}</p>
        </StWriterLayout>
        <StUpdateLayout>
            <p
              onClick={() => {
                navigate(`/edit/${id}`);
              }}
            >
              수정
            </p>
            <p>|</p>
            <p>삭제</p>
          </StUpdateLayout>
          <div>
            <img
              src={`http://15.164.164.146${newPostData[0].image}`}
              alt="이미지를 불러 올 수 없으니 푸쉬업 10회"
            />
            <p>{newPostData[0].content}</p>
          </div>
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

  & > p {
    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  }
`;

export default DetailInfo;
