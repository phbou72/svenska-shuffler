import { atom } from "recoil";

import lessons from "../lessons";

export default atom({
  key: "selectedLessonState",
  default: Array(lessons.length).fill(true),
});
