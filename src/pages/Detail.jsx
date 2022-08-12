import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Detail = () => {
  return (
    <>
      <Header />
      <div>
        <div>title</div>
        <div>
          <div>작성자:</div>
          <div>date</div>
        </div>
      </div>
    </>
  );
};

const DetailContainer = styled.div`
`;

export default Detail;
