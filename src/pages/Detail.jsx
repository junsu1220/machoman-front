import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Detail = () => {
  return (
    <>
      <Header />
      <StDetailLayOut>
        <StDetailContainer>
          <div>
          <div>title</div>
          </div>
          <div>
            <div>작성자:</div>
            <div>date</div>
          </div>
        </StDetailContainer>
      </StDetailLayOut>
    </>
  );
};

const StDetailLayOut = styled.div`
  display: flex;
  justify-content: center;
  width: 935px;
  height: 100vh;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const StDetailContainer = styled.div`
  width: 750px;
  height: 500px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export default Detail;
