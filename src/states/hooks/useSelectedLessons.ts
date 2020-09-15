import { useRecoilState } from "recoil";
import { fill } from "lodash";

import selectedLessonsState from "../selectedLessons";

export default function useSelectedLessons() {
  const [selectedLessons, setSelectedLessons] = useRecoilState(
    selectedLessonsState
  );

  function toggleSelectedLesson(index: number) {
    const newSelectedLessons = [...selectedLessons];
    newSelectedLessons[index] = !newSelectedLessons[index];
    setSelectedLessons(newSelectedLessons);
  }

  function setAllLesson(checked: boolean) {
    const newSelectedLessons = fill(Array(selectedLessons.length), checked);
    setSelectedLessons(newSelectedLessons);
  }

  return { selectedLessons, toggleSelectedLesson, setAllLesson };
}
