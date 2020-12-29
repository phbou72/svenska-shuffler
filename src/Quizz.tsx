import { useState, useEffect } from "react";

import styled from "styled-components";

import Card from "./Card";
import useLastWordsSeen from "./states/hooks/useLastWordsSeen";

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  button:first-child {
    margin-right: 8px;
  }
`;

const RandomButton = styled.button`
  margin-top: 20px;
  background-color: #6699cc;
  border-color: #6699cc;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 12px;
  border-style: none;
`;

const InverseButton = styled.button`
  margin-top: 20px;
  background-color: #6699cc;
  border-color: #6699cc;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 12px;
  border-style: none;
`;

const StyledQuizz = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Quizz = () => {
  const { getNewWord } = useLastWordsSeen();

  const [showAnswer, setShowAnswer] = useState(false);
  const [word, setWord] = useState(getNewWord());
  const [inversedQuestion, setInversedQuestion] = useState(false);

  const onRandomClick = () => {
    setWord(getNewWord());
    setShowAnswer(false);
  };

  const onInverseClick = () => {
    setWord(getNewWord());
    setInversedQuestion(!inversedQuestion);
    setShowAnswer(false);
  };

  useEffect(() => {
    const onKeyDown = (e: any) => {
      switch (e.key) {
        case "r":
          onRandomClick();
          break;

        case "i":
          onInverseClick();
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const text = word;
  const question = !inversedQuestion ? 0 : 1;
  const answer = !inversedQuestion ? 1 : 0;

  return (
    <StyledQuizz>
      <Card
        question={text && text[question]}
        answer={text && text[answer]}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />
      <Buttons>
        <InverseButton onClick={onInverseClick}>Inverser</InverseButton>
        <RandomButton onClick={onRandomClick}>Randomiser</RandomButton>
      </Buttons>
    </StyledQuizz>
  );
};

export default Quizz;
