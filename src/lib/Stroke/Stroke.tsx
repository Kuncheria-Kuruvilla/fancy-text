import { FC } from "react";
import styled from "styled-components";
import FontsWrapper from "../FontsWrapper";

type Size = "sm" | "md" | "lg";
const fontSizes = {
  sm: "4rem",
  md: "8rem",
  lg: "16rem",
} satisfies Record<Size,string>;

type StrokeProps = {
  text: string;
  /**
   * The background color where this text is placed. This is required to calculate the shadow color
   */
  backgroundColor: string;
    /**
   * Color of text
   */
    size?: Size;
};

const StyledH1 = styled.p<{ size: Size, backgroundColor: string }>`
  font-family: Poppins, sans-serif;
  margin: auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #09f1b8,
    #00a2ff,
    #ff00d2,
    #fed90f
  );
  color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ size  }) => fontSizes[size]};
  font-weight: 700;
  letter-spacing: calc(1em / 8);
  padding: calc(calc(1em / 16) / 2);
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: calc(1em / 16);
`;
const Stroke: FC<StrokeProps> = ({ text,  size = "md", backgroundColor = "black" }) => {
  return (
    <FontsWrapper>
      <StyledH1 
        backgroundColor={backgroundColor} 
        size={size}>{text}</StyledH1>
    </FontsWrapper>
  );
};

export default Stroke;
