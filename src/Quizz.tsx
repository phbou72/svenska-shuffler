import React, { useState, useEffect } from "react";
import { random } from "lodash";

import styled from "styled-components";

import words from "./words";

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

const MAX_LAST_WORDS = Math.floor(words.length * 0.35);

let lastWords: string[][] = [];

const getRandomIndex = () => random(words.length - 1);

const addWord = (word: string[]) => {
  if (lastWords.length === MAX_LAST_WORDS) {
    lastWords.shift();
  }
  lastWords.push(word);
};

const getNewWord = () => {
  let word = words[getRandomIndex()];

  if (lastWords.length === 0) {
    addWord(word);
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
        addWord(word);
      } else {
        word = words[getRandomIndex()];
      }
    }
  }

  return word;
};

const Quizz = () => {
  const [word, setWord] = useState(getNewWord());
  const [inversedQuestion, setInversedQuestion] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const text = word;
  const question = !inversedQuestion ? 0 : 1;
  const answer = !inversedQuestion ? 1 : 0;

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
  const onRandomClick = () => {
    setWord(getNewWord());
  };

  const onInverseClick = () => {
    setWord(getNewWord());
    setInversedQuestion(!inversedQuestion);
  };

  return (
    <StyledQuizz>
      <Card question={text[question]} answer={text[answer]} />
      <Buttons>
        <InverseButton onClick={onInverseClick}>Inverser</InverseButton>
        <RandomButton onClick={onRandomClick}>Randomiser</RandomButton>
      </Buttons>
    </StyledQuizz>
  );
};

export default Quizz;
