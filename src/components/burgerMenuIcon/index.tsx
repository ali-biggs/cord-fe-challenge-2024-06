import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default function BurgerMenuIcon() {
  return (
    <BurgerMenu>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerMenu>
  );
}

const BurgerMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

`;

const BurgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${colors.fontColor};
  border-radius: 2px;
`;
