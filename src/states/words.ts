import { selector } from "recoil";

import lessons from "./lessons";
import selectedLessons from "./selectedLessons";

export default selector({
  key: "wordsState",
  get: ({ get }) => {
    const allLessons = get(lessons);
    const allSelectedLessons = get(selectedLessons);

    const wordsGroup: string[][][] = [];
    allLessons.forEach((lesson, index) => {
      if (allSelectedLessons[index]) {
        wordsGroup.push(lesson.data);
      }
    });

    return wordsGroup.flat();
  },
});
