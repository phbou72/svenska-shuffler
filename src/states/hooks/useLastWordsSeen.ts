import { useRecoilValue } from "recoil";
import { random } from "lodash";

import wordsState from "../words";

const MAX_LAST_WORDS_RATIO = 0.35;

let lastWordsSeen: string[][] = [];

export default function useLastWordsSeen() {
  const words = useRecoilValue(wordsState);

  const maxCache = Math.floor(words.length * MAX_LAST_WORDS_RATIO);

  const getRandomWord = () => words[random(words.length - 1)];

  const addWord = (word: string[]) => {
    if (lastWordsSeen.length === maxCache) {
      lastWordsSeen.shift();
    }

    lastWordsSeen.push(word);
  };

  const getNewWord = () => {
    if (words.length === 0) {
      return null;
    }

    let word = getRandomWord();

    if (lastWordsSeen.length === 0) {
      addWord(word);
    } else {
      let hasNewWord = false;
      while (!hasNewWord) {
        let foundWord = false;
        for (let i = 0; i < lastWordsSeen.length; i++) {
          if (lastWordsSeen[i][0] === word[0]) {
            foundWord = true;
            break;
          }
        }

        if (!foundWord) {
          hasNewWord = true;
          addWord(word);
        } else {
          word = getRandomWord();
        }
      }
    }

    return word;
  };

  const resetWordsSeen = () => {
    lastWordsSeen = [];
  };

  return {
    getNewWord,
    resetWordsSeen,
  };
}
