import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as colors from "../../colors";

import Checkbox from "../checkbox";

interface ExpandableIconProps {
  expanded?: boolean;
}
interface ExpandableSectionProps {
  expanded?: boolean;
}

type ExpandableFiltersProps = {
  // genres, ratings, languages, searchMovies
  genres: {
    id: number;
    name: string;
  }[];
  ratings: {
    id: number;
    name: number;
  }[];
  languages: {
    id: string;
    name: string;
  }[];
};

export default function ExpandableFilters({
  genres,
  ratings,
  languages,
}: ExpandableFiltersProps) {
  const [showGenres, setShowGenres] = useState<boolean>(true);
  const [showMinVote, setShowMinVote] = useState<boolean>(false);
  const [showLanguage, setShowLanguage] = useState<boolean>(false);

  return (
    <>
      <SectionHeader>
        <ExpandableIcon
          expanded={showGenres}
          onClick={() => setShowGenres((prev) => !prev)}
        />
        <SectionLabel>Select genre(s)</SectionLabel>
      </SectionHeader>
      <ExpandableSection expanded={showGenres}>
        {genres.map((genre) => {
          return <Checkbox label={genre.name} id={genre.id} />;
        })}
      </ExpandableSection>

      <SectionHeader>
        <ExpandableIcon
          expanded={showMinVote}
          onClick={() => setShowMinVote((prev) => !prev)}
        />
        <SectionLabel>Select min. vote</SectionLabel>
      </SectionHeader>
      <ExpandableSection>
        {ratings.map((rating) => {
          return <Checkbox label={rating.name} id={rating.id} />;
        })}
      </ExpandableSection>

      <SectionHeader>
        <ExpandableIcon
          expanded={showLanguage}
          onClick={() => setShowLanguage((prev) => !prev)}
        />
        <SectionLabel>Select language</SectionLabel>
      </SectionHeader>
      <ExpandableSection expanded={showLanguage}>
        {languages.map((language) => {
          return <Checkbox label={language.name} id={language.id} />;
        })}
      </ExpandableSection>
    </>
  );
}

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 3px;
`;

const SectionLabel = styled.div`
  font-weight: 200;
`;

const ExpandableSection = styled.div<ExpandableSectionProps>`
  margin-top: 20px;
  height: ${(props) => (props.expanded ? "100%" : "0px")};
  overflow: hidden;
`;

const ExpandableIcon = styled.button<ExpandableIconProps>`
  position: relative;
  width: 15px;
  height: 15px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  ${(props) =>
    !props.expanded
      ? css`
          &::before,
          &::after {
            content: "";
            position: absolute;
            background-color: ${colors.fontColor};
          }

          &::before {
            top: 50%;
            left: 0;
            width: 100%;
            height: 2px;
            transform: translateY(-50%);
          }

          &::after {
            top: 0;
            left: 50%;
            width: 2px;
            height: 100%;
            transform: translateX(-50%);
          }
        `
      : css`
          &::before,
          &::after {
            content: "";
            position: absolute;
            background-color: ${colors.fontColor};
          }

          &::before {
            top: 50%;
            left: 0;
            width: 100%;
            height: 2px;
            transform: translateY(-50%);
          }
        `}
`;
