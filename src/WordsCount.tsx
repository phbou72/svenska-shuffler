import styled from "styled-components";
import { useRecoilValue } from "recoil";

import wordsState from "./states/words";

const StyledWordsCount = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const WordsCount = () => {
  const words = useRecoilValue(wordsState);
  return <StyledWordsCount>Nombre de mots : {words.length}</StyledWordsCount>;
};

export default WordsCount;
