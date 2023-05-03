import { FC } from "react";
import styled from "styled-components";

const ComponentWrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Righteous);
  @import url(https://fonts.googleapis.com/css?family=Niconne);
`;
const FontsWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ComponentWrapper>{children}</ComponentWrapper>;
};

export default FontsWrapper;
