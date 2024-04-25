import { useEffect, useState } from "react";
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
import "../index.css";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3em;
  box-shadow: var(--shadow);
`;

const Title = styled.a``;

const Switcher = styled.div``;

export default function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.classList.toggle("dark-body");
  }, [theme]);
  return (
    <HeaderContainer>
      <Title>Where In The World?</Title>
      <Switcher onClick={toggleTheme}>
        <IoMoonOutline /> Dark Mode
      </Switcher>
    </HeaderContainer>
  );
}
