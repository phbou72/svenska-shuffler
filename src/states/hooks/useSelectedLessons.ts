import { useRecoilState } from "recoil";

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
    const newSelectedLessons = Array(selectedLessons.length).fill(checked);
    setSelectedLessons(newSelectedLessons);
  }

  return { selectedLessons, toggleSelectedLesson, setAllLesson };
}
