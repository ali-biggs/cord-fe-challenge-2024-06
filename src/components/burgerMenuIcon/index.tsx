import styled from "styled-components";

export default function BurgerMenuIcon() {
  return (
    <BurgerMenu>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerMenu>
  );
}

const BurgerMenu = styled.div`
  width: 30px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const BurgerLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #333;
  border-radius: 2px;
`;
