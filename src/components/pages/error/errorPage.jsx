import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import Button from "../../reusableUi/Button";
import { FaChevronCircleRight } from "react-icons/fa";

export default function ErrorPage() {
  //state

  //comportements

  //render

  return (
    <ErrorPageStyled>
      <h1>Page Introuvable</h1>
      <Link to="/">
        <Button
          className="button"
          Icon={<FaChevronCircleRight />}
          content={"Revener à l'accueil"}
          version={"normal"}
        />
      </Link>
    </ErrorPageStyled>
  );
}

const ErrorPageStyled = styled.div`
  font-family: "Amatic SC", cursive;
  gap: ${theme.spacing.md};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(rgba(4, 2, 2, 0.5), rgba(0, 0, 0, 0.5)),
    url("/crazee-bg.jpg");

  h1 {
    font-size: ${theme.fonts.P6};
  }

  a {
    text-decoration: none;
  }
`;
