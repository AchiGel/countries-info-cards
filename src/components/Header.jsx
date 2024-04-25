import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3em;
  border-bottom: 1px solid var(--dark-blue);
`;

export default function Header() {
  return (
    <HeaderContainer>
      Where In The World?
      <div>
        <IoMoonOutline /> Dark Mode
      </div>
    </HeaderContainer>
  );
}
