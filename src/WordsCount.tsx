import React from "react";
import styled from "styled-components";

import words from "./words";

const StyledWordsCount = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const WordsCount = () => (
  <StyledWordsCount>Number of words : {words.length}</StyledWordsCount>
);

export default WordsCount;
