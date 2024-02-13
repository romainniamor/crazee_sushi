import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme/index";
import styled from "styled-components";
import TextInput from "../../reusableUi/TextInput";
import WelcomeMessage from "./WelcomeMessage";
import { FaChevronCircleRight } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../../reusableUi/Button";
import { authenticateUser } from "../../../api/user";

export default function LoginForm() {
  //state
  const [userName, setUserName] = useState("");
  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  const navigate = useNavigate();

  //comportements
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await authenticateUser(userName);
    setUserName("");
    navigate(`order/${result.username}`);
  };

  //render
  return (
    <LoginFormStyled>
      <WelcomeMessage />
      <form onSubmit={handleSubmit}>
        <TextInput
          Icon={<BsPersonCircle className="login-icon" />}
          value={userName}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          version="normal"
        />
        <Button
          Icon={<FaChevronCircleRight />}
          content={"Accèdez à mon espace"}
          version={"normal"}
        />
      </form>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Amatic SC", cursive;
  gap: ${theme.spacing.md};
  color: ${theme.colors.white};
  max-width: 464px;
  min-width: 400px;
  padding: 2.5rem 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.md};
    width: 100%;
  }
`;
