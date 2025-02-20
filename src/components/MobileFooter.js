import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineHome, AiFillInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";

const MobileFooter = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <FooterContainer>
      <ThemeToggle onClick={toggleTheme}>
        {theme === "light" ? "🌑" : "☀️"}
      </ThemeToggle>
      <NavLink to="/" className="footer-link">
        <AiOutlineHome />
        <span>Inicio</span>
      </NavLink>
      <NavLink to="/about" className="footer-link">
        <AiFillInfoCircle />
        <span>Sobre Nosotros</span>
      </NavLink>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: ${(props) => props.theme.bg};
    padding: 10px 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    .footer-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: ${(props) => props.theme.text};
      font-size: 1.2rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;

export default MobileFooter;