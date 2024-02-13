import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Footer() {
  return <FooterStyled>いらっしゃいませ</FooterStyled>;
}

const FooterStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.P2};
  font-weight: ${theme.weights.medium};
  color: ${theme.colors.white};
`;
