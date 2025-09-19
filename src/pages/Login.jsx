import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff6b35, #ffcc29); /* Rojo salsa + amarillo mostaza */
  font-family: "Comic Sans MS", "Chewy", cursive, sans-serif; /* ¡Que se note la fiesta! */
  background-image: url('https://www.transparenttextures.com/patterns/food.png');
  background-size: 300px;
  background-blend-mode: overlay;
`;

const Card = styled.div`
  background: #fdf4e3; /* Pan tostado claro */
  padding: 2.5rem;
  border-radius: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 420px;
  text-align: center;
  border: 4px solid #d62828; /* Borde rojo como kétchup */
  position: relative;
  overflow: hidden;

  &::before {
    content: "🍔";
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2rem;
    opacity: 0.3;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.8rem;
  color: #d62828; 
  text-shadow: 2px 2px 0 #ffd700;
  letter-spacing: -0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.2rem;
  border: 2px solid #ffd700;
  border-radius: 50px;
  font-size: 1.1rem;
  outline: none;
  background: #fff9f0;
  font-family: inherit;
  transition: all 0.3s ease;
  text-align: center; 
  box-sizing: border-box; 
  display: block; 
  margin-left: auto;
  margin-right: auto;

  &:focus {
    border-color: #d62828;
    background: #fff;
    transform: scale(1.02);
    box-shadow: 0 0 8px rgba(214, 40, 40, 0.3);
  }

  &::placeholder {
    color: #a87c00;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #d62828; 
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 #a81e1e;

  &:hover {
    background: #ff6b35;
    transform: translateY(-2px);
    box-shadow: 0 6px 0 #a81e1e;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #a81e1e;
  }
`;

const FooterText = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #5e3000; 
  font-weight: 500;

  a {
    color: #d62828;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px dotted #ffd700;
    padding-bottom: 2px;

    &:hover {
      color: #ff6b35;
      border-bottom-style: solid;
    }
  }
`;

export default function Login() {
  return (
    <Container>
      <Card>
        <Title>¡Entra a la Fiesta!</Title>
        <form>
          <Input type="email" placeholder="Tu correo (donde te mandamos las ofertas 🍟)" />
          <Input type="password" placeholder="Contraseña (más secreta que la receta de la salsa 🤫)" />
          <Button type="submit">¡DAME MI HAMBURGUESA!</Button>
        </form>
        <FooterText>
          ¿Aún no estás en la fiesta? <Link to="/register">ÚNETE AQUÍ</Link>
        </FooterText>
      </Card>
    </Container>
  );
}