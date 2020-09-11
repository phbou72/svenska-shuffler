import { selector } from "recoil";
import { flatten } from "lodash";

import words from "./words";

export default selector({
  key: "flattenedWords",
  get: ({ get }) => {
    return flatten(get(words));
  },
});
