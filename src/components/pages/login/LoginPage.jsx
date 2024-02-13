import LoginForm from "./LoginForm";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import Logo from "../../reusableUi/Logo";

export default function LoginPage() {
  //state

  //comportements

  //render
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"} />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/crazee-bg.jpg");

  .logo-login-page {
    transform: scale(2.5);
  }
`;
