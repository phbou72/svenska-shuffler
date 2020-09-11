import React from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

import Quizz from "./Quizz";
import ListOfWords from "./ListOfWords";
import WordsCount from "./WordsCount";

const StyledApp = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface IProps {}
interface IState {}

const App = () => {
  return (
    <RecoilRoot>
      <StyledApp>
        <Quizz />
        <WordsCount />
        <ListOfWords />
      </StyledApp>
    </RecoilRoot>
  );
};

export default App;
