import React from "react";
import styled, { css } from "styled-components";
import logo from "../src_assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import hambergurBtn from "../src_assets/hambergurBtn.png";
import Fire from "../src_assets/Fire.jpg";
import useDetectClose from "./hooks/useDetectClose";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser, __checkToken } from "../redux/modules/loginSlice";

const Header = () => {
  const checkToken = useSelector((state) => state.login.user.result);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localToken = localStorage.getItem("token");

  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const logOut = () => {
    alert("정상 로그아웃 되었습니다.");
    localStorage.removeItem("token");
    dispatch(logOutUser());
    navigate("/");
  };
  return (
    <StHeader>
      <StHeaderLeftContainer>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <StLogoImg />
        </Link>
      </StHeaderLeftContainer>
      <HeaderFontsStyles>
        <h1>MACHOMAN</h1>
      </HeaderFontsStyles>
      <StHeaderRightContainer>
        <DropdownContainer>
          <DropdownButton onClick={myPageHandler} ref={myPageRef}>
            <StLoginList />
          </DropdownButton>
          <Menu isDropped={myPageIsOpen}>
            <Ul>
              <Li>
                <LinkWrapper href="#1-1">
                  {checkToken ? (
                    <>
                      <LogoutBtn onClick={logOut}>로그아웃</LogoutBtn>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <div
                          style={{ backgroundColor: "none", color: "white" }}
                        >
                          로그인
                        </div>
                      </Link>
                    </>
                  )}
                </LinkWrapper>
              </Li>
            </Ul>
          </Menu>
        </DropdownContainer>
      </StHeaderRightContainer>
    </StHeader>
  );
};

const StLoginList = styled.div`
  background-image: url(${hambergurBtn});
  width: 70px;
  height: 70px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 0px solid black;
  /* background-image: url(${Fire}); */
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(199, 197, 197, 0.5)
    ),
    url(${Fire});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
`;

const StHeaderLeftContainer = styled.div``;

const HeaderFontsStyles = styled.div`
  & > h1 {
    font-family: "RubinDirt";
    /* font-family: 'AlfaSlabOne'; */
    font-size: 70px;
    color: #ffffffe7;
  }
`;

const StHeaderRightContainer = styled.div`
  display: flex;
`;

const StLogoImg = styled.div`
  background-image: url(${logo});
  width: 80px;
  height: 80px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  background: gray;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: gray;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const LogoutBtn = styled.button`
  width: 100%;
  height: 40px;
  color: var(--black);
  border: none;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  :hover {
    border: 1px solid var(--blue);
  }
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;

export default Header;
