import { FC } from "react";
import styled from "styled-components";
type RosesProps = {
  text: string;
};
const Roses: FC<RosesProps> = ({ text }) => {
  const StyledDiv = styled.div`
    font-size: 15rem;
    color: #fcedd8;
    font-family: "Niconne", cursive;
    font-weight: 700;
    text-shadow: 5px 5px 0px #eb452b, 10px 10px 0px #efa032,
      15px 15px 0px #46b59b, 20px 20px 0px #017e7f, 25px 25px 0px #052939;
  `;
  return <StyledDiv>{text}</StyledDiv>;
};

export default Roses;
