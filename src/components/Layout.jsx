import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <StContainer>
      <StLayout>{props.children}</StLayout>
    </StContainer>
  );
};

const StLayout = styled.div`
  max-width: 945px;
  /* max-height: 100%; */
  min-height: calc(100vh - 123px);
  margin: 0 auto;
  padding: 0 20px;
  box-shadow: rgba(240, 240, 244, 0.2) 0px 7px 29px 0px;
  background-color: #1f1e1e;
`;

const StContainer = styled.div`
  background-color: #1f1e1e;
`;

export default Layout;
