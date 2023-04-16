import { FC } from "react";
import styled, { keyframes } from "styled-components";
import "./main.css";

const ComponentWrapper = styled.div`
  position: relative;
  &:before,
  &:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;

const shadAnim = keyframes`
0% {
background-position: 0 0;
}
0% {
background-position: 100% -100%;
}`;

const StyledH1 = styled.h1`
  display: inline-block;
  position: relative;
  margin: auto;
  color: white;
  font-family: Righteous, serif;
  font-size: 12em;
  text-shadow: 0.03em 0.03em 0 #242424;

  &:after {
    content: attr(data-shadow);
    position: absolute;
    top: 0.06em;
    left: 0.06em;
    z-index: -1;
    text-shadow: none;
    background-image: linear-gradient(
      45deg,
      transparent 45%,
      hsla(48, 20%, 90%, 1) 45%,
      hsla(48, 20%, 90%, 1) 55%,
      transparent 0
    );
    background-size: 0.05em 0.05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${shadAnim} 15s linear infinite;
  }
`;

type DangProps = { text: string };

const Dang: FC<DangProps> = ({ text }) => {
  return (
    <ComponentWrapper>
      <StyledH1 data-shadow={text}>{text}</StyledH1>
    </ComponentWrapper>
  );
};

export default Dang;
