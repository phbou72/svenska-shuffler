import { atom } from "recoil";

import words from "../words";

export default atom({
  key: "wordsState",
  default: words,
});
