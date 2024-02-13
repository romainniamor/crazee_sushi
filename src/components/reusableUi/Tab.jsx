import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

export default function Tab({ icon, label, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{icon}</div>
      {label && <div className="label">{label}</div>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 45px;
  padding: 0 22px;
  box-sizing: content-box;

  position: relative;
  top: 1px;
  left: 5%;

  display: flex;
  gap: 17px;
  justify-content: center;
  align-items: center;

  font-size: ${theme.fonts.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  border: 1px;
  border-bottom: 2px;
  border-color: ${theme.colors.greyLight};
  border-style: solid;
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0 0;

  cursor: pointer;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label:hover {
    text-decoration: underline;
  }

  &:hover {
    border-bottom: 2px solid transparent;
  }
`;
