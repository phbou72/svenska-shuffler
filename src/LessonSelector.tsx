import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";

import selectedLessonsState from "./states/selectedLessons";
import lessons from "./states/lessons";

const StyledLessonSelector = styled.div`
  width: 500px;
  display: flex;
`;

const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;

function useSelectLessonSelector() {
  const [selectedLessons, setSelectedLessons] = useRecoilState(
    selectedLessonsState
  );

  function toggleSelectedLesson(index: number) {
    const newLessons = [...selectedLessons];
    newLessons[index] = !newLessons[index];
    setSelectedLessons(newLessons);
  }

  return { selectedLessons, toggleSelectedLesson };
}

const LessonSelector = () => {
  const { selectedLessons, toggleSelectedLesson } = useSelectLessonSelector();
  const allLessons = useRecoilValue(lessons);

  const lessonsCheckboxes = map(selectedLessons, (selectedLesson, index) => {
    return (
      <label key={index}>
        {allLessons[index].title}
        <StyledCheckbox
          type="checkbox"
          checked={!!selectedLesson}
          value={index}
          onChange={() => {
            toggleSelectedLesson(index);
          }}
        />
      </label>
    );
  });
  return <StyledLessonSelector>{lessonsCheckboxes}</StyledLessonSelector>;
};

export default LessonSelector;
