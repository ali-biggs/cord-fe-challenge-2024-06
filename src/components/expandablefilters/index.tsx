import React, { useState } from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

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
  const [filtersShown] = useState(false);
  console.log("genres in filters", genres)

  // You need to create your own checkbox component with a custom checkmark

  return (
    <>
      {genres.map(genre => {
        <Checkbox genreTitle={genre.name} genreId={genre.id} />
      })}
    </>
  )
}
