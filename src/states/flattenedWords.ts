import { selector } from "recoil";
import { flatten, map } from "lodash";

import lessons from "./lessons";

export default selector({
  key: "flattenedWords",
  get: ({ get }) => {
    const allLessons = [...get(lessons)];
    const wordsGroup = map(allLessons, (lesson) => lesson.data);
    return flatten(wordsGroup);
  },
});
