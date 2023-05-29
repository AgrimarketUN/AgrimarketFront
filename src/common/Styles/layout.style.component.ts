import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import background from "@/assets/Homebackground.svg";

export const HomeWrapper = styled.div`
  //background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: "flex";
`;


export const PrivateWrapper = styled(Box)`
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
`;

export const LogoWrapper = styled.div`
  align-self: center;
  display: flex;
  padding-bottom: 15px;
`;

export const LogoImg = styled.img`
  align-self: center;
  display: flex;
`;

export const FormWrapper = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 504px;
  position: relative;
  width: 403px;
`;



export const StyledBox = styled(Box)`
  align-items: center;
  margin-bottom: 10px;
  width: 400px;
  height: 50px;
`;

export const StyledButton = styled(Button)`
  align-items: center;
  width: 400px;
  height: 50px;
`;

export const StyledTextButton = styled(Button)`
  color: white;
  align-items: center;
  width: 400px;
  height: 50px;
  &.MuiButton-text {
    background-color: transparent;
    box-shadow: none;
  }
  & .MuiButton-label {
    text-decoration: underline;
  }
`;

export const LoginPage = styled.div`
display: "flex";
        justifyContent: "center";
        height: "100%";
`;
