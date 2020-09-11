import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import flattenedWords from "./states/flattenedWords";

const StyledWordsCount = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const WordsCount = () => {
  const words = useRecoilValue(flattenedWords);
  return <StyledWordsCount>Number of words : {words.length}</StyledWordsCount>;
};

export default WordsCount;
