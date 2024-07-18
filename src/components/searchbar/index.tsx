import React, { useState } from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

interface KeySearchIconProps {
  magnifyingGlass?: boolean;
  calendar?: boolean;
}

export default function SearchBar() {
  const [keyWord, setKeyWord] = useState<string>("");
  const [releaseYear, setReleaseYear] = useState<number | null>(null);

  return (
    <>
      <SearchWrapper>
        <KeySearchIcon magnifyingGlass />
        <KeyWordInput />
      </SearchWrapper>
      <SearchWrapper>
        <KeySearchIcon calendar />
        <YearInput />
      </SearchWrapper>
    </>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 2px solid ${colors.primaryColor};
  margin-bottom: 10px;
`;

const KeyWordInput = styled.input.attrs({ type: "text" })`
  border: none;
  width: 100%;
  padding-top: 2px;
  font-weight: 700;
  font-size: 1.4em;
  color: ${colors.primaryColor};
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border: none;
  }
`;

const YearInput = styled.input.attrs({ type: "number", placeholder: "Year of release" })`
  &::placeholder {
    font-weight: 200;
    color: ${colors.primaryColor};
  }

  border: none;
  width: 100%;
  padding-top: 2px;
  font-weight: 700;
  font-size: 1.4em;
  color: ${colors.primaryColor};
  margin-bottom: 10px;


  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;

  &:focus {
    outline: none;
    border: none; 
  }
`;

const KeySearchIcon = styled.div<KeySearchIconProps>`
  ${(props) =>
    props.magnifyingGlass &&
    css`
      &::after {
        content: "";
        display: inline-block;
        background-image: url(${SearchIcon});
        background-size: contain;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        padding-bottom: 2px;
      }
    `}

  ${(props) =>
    props.calendar &&
    css`
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${CalendarIcon});
        background-size: contain;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
      }
    `}
`;
