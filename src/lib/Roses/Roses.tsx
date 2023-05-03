import { FC } from "react";
import styled from "styled-components";
import FontsWrapper from "../FontsWrapper";

type Size = "sm" | "md" | "lg";
const fontSizes = {
  sm: "4rem",
  md: "8rem",
  lg: "16rem",
} satisfies Record<Size,string>;
const textShadow = {
  sm: `2px 2px 0px #eb452b, 4px 4px 0px #efa032, 6px 6px 0px #46b59b, 8px 8px 0px #017e7f, 10px 10px 0px #052939`,
  md: `3px 3px 0px #eb452b, 6px 6px 0px #efa032, 9px 9px 0px #46b59b, 12px 12px 0px #017e7f, 15px 15px 0px #052939`,
  lg: `5px 5px 0px #eb452b, 10px 10px 0px #efa032, 15px 15px 0px #46b59b, 20px 20px 0px #017e7f, 25px 25px 0px #052939`
} satisfies Record<Size,string>;

const StyledDiv = styled.div<{ size: Size }>`
font-size: ${({ size  }) => fontSizes[size]};
color: #fcedd8;
font-family: 'Niconne', cursive;
font-weight: 700;
text-shadow: ${({ size  }) => textShadow[size]};`;

type RosesProps = {
  text: string;
  size?: Size;
};
const Roses: FC<RosesProps> = ({ text, size = "md" }) => {
  return <FontsWrapper><StyledDiv size={size}>{text}</StyledDiv></FontsWrapper>;
};

export default Roses;
