import React from "react";
import styled from "styled-components";
import logo from "../src_assets/logo.png";
import hambergurBtn from "../src_assets/hambergurBtn.png";
import Fire from "../src_assets/Fire.jpg"

const Header = () => {
  return (
    <StHeader>
      <StHeaderLeftContainer>
        <StLogoImg />
      </StHeaderLeftContainer>
      <h1>MACHOMAN</h1>
      <StHeaderRightContainer>
        <StLoginList />
      </StHeaderRightContainer>
    </StHeader>
  );
};

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  background-image: url(${Fire});
`;

const StHeaderLeftContainer = styled.div``;

const StHeaderRightContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StLogoImg = styled.div`
  background-image: url(${logo});
  width: 70px;
  height: 70px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const StLoginList = styled.div`
  background-image: url(${hambergurBtn});
  width: 70px;
  height: 70px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export default Header;
