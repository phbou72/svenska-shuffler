import { atom } from "recoil";

import lessons from "../lessons";

export default atom({
  key: "lessonsState",
  default: lessons,
});
