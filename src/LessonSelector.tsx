import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import { useRecoilValue } from "recoil";

import lessonsState from "./states/lessons";
import useSelectedLessons from "./states/hooks/useSelectedLessons";

const StyledLessonSelector = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;

const Buttons = styled.div`
  margin-top: 16px;
`;

const StyledButton = styled.button`
  background-color: #6699cc;
  border-color: #6699cc;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 12px;
  border-style: none;
  :first-child {
    margin-right: 8px;
  }
`;

const LessonSelector = () => {
  const {
    selectedLessons,
    toggleSelectedLesson,
    setAllLesson,
  } = useSelectedLessons();
  const lessons = useRecoilValue(lessonsState);

  const lessonsCheckboxes = map(selectedLessons, (selectedLesson, index) => {
    return (
      <label key={index}>
        {lessons[index].title}
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

  const onUncheckAll = () => {
    setAllLesson(false);
  };

  const onCheckAll = () => {
    setAllLesson(true);
  };

  return (
    <StyledLessonSelector>
      {lessonsCheckboxes}

      <Buttons>
        <StyledButton onClick={onUncheckAll}>Décocher tout</StyledButton>
        <StyledButton onClick={onCheckAll}>Cocher tout</StyledButton>
      </Buttons>
    </StyledLessonSelector>
  );
};

export default LessonSelector;
