import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  max-width: 945px;
  max-height: 100vh;
`;

export default Layout;
