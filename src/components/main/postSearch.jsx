import React, { useState } from "react";
import styled from "styled-components";

import back2 from "../../src_assets/back2.png";
import search2 from "../../src_assets/search.png";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __searchPost } from "../../redux/modules/postSlice";

const PostSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Wrap>
        {" "}
        <BackBtn>
          <StBackImg />
        </BackBtn>
        <SearchInput
          value={search}
          placeholder="검색 키워드를 입력해주세요"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              console.log(search);
              dispatch(__searchPost(search));
              setSearch("");
            }
          }}
        />
        <SearchBtn
          onClick={(e) => {
            if (search === "") {
              window.alert("검색 키워드를 입력해주세요!");
              setSearch("");
            } else {
              e.preventDefault();
              dispatch(__searchPost(search));
              setSearch("");
            }
          }}
        >
          <StSearchImg />
        </SearchBtn>
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBackImg = styled.div`
  background-image: url(${back2});
  width: 40px;
  height: 40px;
  background-position: center;
  background-size: cover;
  color: white;
  cursor: pointer;
`;

const StSearchImg = styled.div`
  background-image: url(${search2});
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: cover;
  color: white;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 700px;
  padding: 10px;
  outline: none;
  border: none;
  border: 1px solid var(--blue);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 20px;
  text-align: center;
  :focus {
    transition: 0.1s border;
    border: 3px solid var(--blue);
    border-radius: 20px;
    text-align: left;
    color: white;
  }
  ::placeholder {
    color: white;
    font-style: italic;
  }
`;

const SearchBtn = styled.div`
  width: 25px;
  height: 25px;
  font-size: 20px;
  border: none;
`;
const BackBtn = styled.div`
  /* font-size: 20px;
  border: none; */
`;

export default PostSearch;
