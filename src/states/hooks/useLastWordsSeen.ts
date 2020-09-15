import { useRecoilState, useRecoilValue } from "recoil";
import { random, drop, clone } from "lodash";

import wordsState from "../words";
import lastWordsSeenState from "../lastWordsSeen";

const MAX_LAST_WORDS_RATIO = 0.35;

export default function useLastWordsSeen() {
  const words = useRecoilValue(wordsState);
  const [lastWordsSeen, setLastWordsSeen] = useRecoilState(lastWordsSeenState);
  const maxCache = Math.floor(words.length * MAX_LAST_WORDS_RATIO);

  const getRandomWord = () => words[random(words.length - 1)];

  const addWord = (word: string[]) => {
    if (lastWordsSeen.length === maxCache) {
      setLastWordsSeen(drop(lastWordsSeen));
    }

    const cloned = clone(lastWordsSeen);
    cloned.push(word);
    setLastWordsSeen(cloned);
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

  return {
    getNewWord,
  };
}
