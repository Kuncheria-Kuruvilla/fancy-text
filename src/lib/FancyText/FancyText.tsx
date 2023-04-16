import { FC } from "react";
import styled from "styled-components";

type Size = "sm" | "md" | "lg";
const fontSizes = {
  sm: "4rem",
  md: "8rem",
  lg: "16rem",
} satisfies Record<Size,string>;

const StyledH1 = styled.h1<{ size: Size }>`
margin-top: 0px;
margin-bottom: 8px;
text-shadow: 3px 3px #011627;
font-family: sans-serif;
color: #FFF;
font-size: ${({ size  }) => fontSizes[size]};`;

type FancyTextProps = { text: string , size?: Size};

const FancyText: FC<FancyTextProps> = ({ text ,size="md" }) => {
  const words = text.split(" ");

  return (
    <StyledH1 size={size}>
      {words.map((word) => (
        <span
          key={word}
          style={{
            display: "inline-block",
            backgroundSize: "100% 1.2em",
            backgroundPosition: "0.5em 0px",
            backgroundRepeat: "no-repeat space",
            paddingRight: ".8em",
            marginRight: "-0.5em",
            backgroundImage:
              "linear-gradient(transparent 55%,#EF5350 55%,#EF5350 95%,transparent 95%)",
          }}
        >
          {word}
        </span>
      ))}
    </StyledH1>
  );
};

export default FancyText;
