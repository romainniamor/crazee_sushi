import styled from "styled-components";
import CardProduct from "../CardProduct";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/orderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import Loading from "./Loading";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { menuCardsAnimation } from "../../../../../theme/animations";
import { DEFAULT_IMG, DEFAULT_OVERLAY_IMG } from "../../../../../enums/product";
import { convertStringToBoolean } from "../../../../../utils/string";
import RibbonAnimated from "./RibbonAnimated";
import { ribbonAnimation } from "./RibbonAnimated";

export default function Menu() {
  const {
    userName,
    products,
    isModeAdmin,
    handleDeleteProduct,
    resetProducts,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleProductSelected,
    handleDeleteBasketProductFromMenu,
  } = useContext(OrderContext);

  //state

  //comportements

  const handleClick = (id) => {
    if (!isModeAdmin) {
      return;
    }
    handleProductSelected(id);
  };

  const checkIfProductIsClick = (idProductInMenu, idProductClickOn) => {
    return idProductInMenu === idProductClickOn;
  };

  const handleCardDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteProduct(id, userName);
    handleDeleteBasketProductFromMenu(id, userName);
    productSelected.id === id && setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (e, idProductToAdd) => {
    e.stopPropagation();
    // const productToAdd = findInArray(products, idProductToAdd);
    handleAddToBasket(idProductToAdd, userName);
  };

  //render

  if (products === undefined) {
    return <Loading />;
  }

  if (products.length === 0) {
    if (isModeAdmin) {
      return <EmptyMenuAdmin onClick={() => resetProducts(userName)} />;
    }
    return <EmptyMenuClient />;
  }

  return (
    <TransitionGroup component={MenuStyled}>
      {products.map((product) => (
        <CSSTransition
          classNames={"menu-cards"}
          timeout={300}
          key={product.id}
          appear={false}
        >
          <div
            className={
              isModeAdmin ? "card-container is-hoverable" : "card-container"
            }
          >
            {convertStringToBoolean(product.isAdvertised) && <RibbonAnimated />}

            <CardProduct
              key={product.id}
              title={product.title}
              img={product.imageSource ? product.imageSource : DEFAULT_IMG}
              price={product.price}
              hasDeleteButton={isModeAdmin}
              onDelete={(e) => handleCardDelete(e, product.id)}
              onClick={() => handleClick(product.id)}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductIsClick(productSelected.id, product.id)}
              onAdd={(e) => handleAddButton(e, product.id)}
              isOverlayVisible={
                convertStringToBoolean(product.isAvailable) === false
              }
              overlayImg={DEFAULT_OVERLAY_IMG}
              disabled={convertStringToBoolean(product.isAvailable) === false}
            />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  grid-row-gap: 60px;
  overflow-y: scroll;
  padding: 50px 50px 150px;
  ${menuCardsAnimation}

  .card-container {
    position: relative;
    &.is-hoverable {
      &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  ${ribbonAnimation}
`;
