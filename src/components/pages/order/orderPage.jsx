import { theme } from "../../../theme";
import styled from "styled-components";
import NavBar from "./navBar/NavBar";
import Main from "./main/Main";
import OrderContext from "../../../contexts/orderContext";
import { useState, useRef, useEffect } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useProducts } from "../../../hooks/useProducts";
import { useBasket } from "../../../hooks/useBasket";
import { findInArray } from "../../../utils/arrays";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "./helpers/initialiseUserSession";

export default function OrderPage() {
  //states
  const { userName } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditInputRef = useRef();

  //comportements via custom hooks

  const {
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetProducts,
    products,
    setProducts,
  } = useProducts();

  const {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteFromBasket,
    handleDeleteBasketProductFromMenu,
  } = useBasket();

  const handleProductSelected = async (id) => {
    const productClickedOn = findInArray(products, id);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setProductSelected(productClickedOn);
    titleEditInputRef.current.focus();
  };

  //initialisation des data products and basket
  useEffect(() => {
    initialiseUserSession(userName, setProducts, setBasket);
  }, []);

  //contextValues

  const orderContextValue = {
    userName,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    handleAddProduct,
    handleDeleteProduct,
    resetProducts,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditInputRef,
    basket,
    handleAddToBasket,
    handleDeleteFromBasket,
    handleDeleteBasketProductFromMenu,
    handleProductSelected,
  };

  //render
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <NavBar></NavBar>
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 1400px;
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
