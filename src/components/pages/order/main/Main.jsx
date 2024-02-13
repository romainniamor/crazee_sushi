import { styled, css } from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./menu/Menu";
import Admin from "./admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../contexts/orderContext";
import Basket from "./basket/Basket";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);
  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};

  display: grid;
  grid-template-columns: 350px 1fr;
  height: calc(95vh - 100px);

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  }
`;
