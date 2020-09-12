import React from "react";
import styled from "styled-components";

import Quizz from "./Quizz";
import LessonSelector from "./LessonSelector";
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
    <StyledApp>
      <Quizz />
      <LessonSelector />
      <WordsCount />
      <ListOfWords />
    </StyledApp>
  );
};

export default App;
