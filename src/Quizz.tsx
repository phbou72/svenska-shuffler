import React, { useState, useEffect } from "react";
import { random } from "lodash";
import { useRecoilValue } from "recoil";

import styled from "styled-components";

import wordsState from "./states/words";

import Card from "./Card";

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

const MAX_LAST_WORDS_RATIO = 0.35;

let lastWords: string[][] = [];

const getRandomIndex = (words: string[][]) => random(words.length - 1);

const addWord = (word: string[], words: string[][]) => {
  if (lastWords.length === Math.floor(words.length * MAX_LAST_WORDS_RATIO)) {
    lastWords.shift();
  }
  lastWords.push(word);
};

const getNewWord = (words: string[][]) => {
  if (words.length === 0) {
    return null;
  }

  let word = words[getRandomIndex(words)];

  if (lastWords.length === 0) {
    addWord(word, words);
  } else {
    let hasNewWord = false;
    while (!hasNewWord) {
      let foundWord = false;
      for (let i = 0; i < lastWords.length; i++) {
        if (lastWords[i][0] === word[0]) {
          foundWord = true;
          break;
        }
      }

      if (!foundWord) {
        hasNewWord = true;
        addWord(word, words);
      } else {
        word = words[getRandomIndex(words)];
      }
    }
  }

  return word;
};

const Quizz = () => {
  const words = useRecoilValue(wordsState);

  const [showAnswer, setShowAnswer] = useState(false);
  const [word, setWord] = useState(getNewWord(words));
  const [inversedQuestion, setInversedQuestion] = useState(false);

  const onRandomClick = () => {
    setWord(getNewWord(words));
    setShowAnswer(false);
  };

  const onInverseClick = () => {
    setWord(getNewWord(words));
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
