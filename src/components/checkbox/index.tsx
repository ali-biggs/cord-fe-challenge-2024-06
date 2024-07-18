import React, { useState } from "react";
import * as colors from "../../colors";
import styled from "styled-components";

type CheckBoxProps = {
  genreTitle: string;
  genreId: number;
};

export default function CheckBox({ genreTitle, genreId }: CheckBoxProps) {
  // Create a custom checkbox component
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <CheckboxCont>
      <Input />
      <LabelText>{genreTitle}</LabelText>
    </CheckboxCont>
  );
}

const CheckboxCont = styled.span`
  position: relative;
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  width: 15px;
  height: 15px;
  position: relative;
  appearance: none;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #fff;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 4px;
    width: 4px;
    height: 8px;
    border: solid black;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }
`;

const LabelText = styled.div`
  font-weight: 300;
`;
