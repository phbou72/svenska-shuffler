import { atom } from "recoil";
import { fill } from "lodash";

import lessons from "../lessons";

export default atom({
  key: "selectedLessonState",
  default: fill(Array(lessons.length), true),
});
