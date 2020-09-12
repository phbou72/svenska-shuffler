import { selector } from "recoil";
import { flatten, forEach } from "lodash";

import lessons from "./lessons";
import selectedLessons from "./selectedLessons";

export default selector({
  key: "flattenedWords",
  get: ({ get }) => {
    const allLessons = get(lessons);
    const allSelectedLessons = get(selectedLessons);

    const wordsGroup: string[][][] = [];
    forEach(allLessons, (lesson, index) => {
      if (allSelectedLessons[index]) {
        wordsGroup.push(lesson.data);
      }
    });

    return flatten(wordsGroup);
  },
});
