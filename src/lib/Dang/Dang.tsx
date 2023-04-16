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

const StyledH1 = styled.h1<{ textColor: string; backgroundColor: string, size: Size }>`
  display: inline-block;
  position: relative;
  margin: auto;
  margin: auto;
  color: ${({ textColor }) => textColor};
  font-family: Righteous, serif;
  font-size: ${({ size  }) => fontSizes[size]};
  text-shadow: 0.03em 0.03em 0 ${({ backgroundColor }) => backgroundColor};
  padding-right: 0.2em;

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
      ${({ textColor }) => textColor} 45%,
      ${({ textColor }) => textColor} 55%,
      transparent 0
    );
    background-size: 0.05em 0.05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${shadAnim} 15s linear infinite;
  }
`;

type Size = "sm" | "md" | "lg";
const fontSizes = {
  sm: "4rem",
  md: "8rem",
  lg: "16rem",
} satisfies Record<Size,string>;
type DangProps = {
  text: string;
  /**
   * The background color where this text is placed. This is required to calculate the shadow color
   */
  backgroundColor: string;
  /**
   * Color of text
   */
  size?: Size;
  textColor?: string;
};

const Dang: FC<DangProps> = ({
  text,
  textColor = "white",
  size = "md",
  backgroundColor = "black",
}) => {
  const words = text.split(" ");
  return (
    <ComponentWrapper>
      {words.map((word,i) => <StyledH1
        key={i}
        data-shadow={word}
        size={size}
        textColor={textColor}
        backgroundColor={backgroundColor}
      >
        {word}
      </StyledH1>)}
    </ComponentWrapper>
  );
};

export default Dang;
