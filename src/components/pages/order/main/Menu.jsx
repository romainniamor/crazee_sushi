import styled from "styled-components";
import CardProduct from "./CardProduct";
import { useContext } from "react";
import OrderContext from "../../../../contexts/orderContext";

export default function Menu() {
  //state
  const { products } = useContext(OrderContext);

  //comportements

  //render
  return (
    <MenuStyled>
      {products.map((product) => {
        return (
          <CardProduct
            key={product.id}
            title={product.title}
            img={product.imageSource}
            price={product.price}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  grid-row-gap: 60px;
  overflow-y: scroll;
  padding: 50px 50px 150px;
`;
