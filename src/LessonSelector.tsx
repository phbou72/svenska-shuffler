import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import lessonsState from "./states/lessons";
import useSelectedLessons from "./states/hooks/useSelectedLessons";
import useLastWordsSeen from "./states/hooks/useLastWordsSeen";

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

const LessonsCheckboxes = () => {
  const { selectedLessons, toggleSelectedLesson } = useSelectedLessons();
  const { resetWordsSeen } = useLastWordsSeen();
  const lessons = useRecoilValue(lessonsState);

  const checkboxes = selectedLessons.map((selectedLesson, index) => {
    const toggleLesson = () => {
      resetWordsSeen();
      toggleSelectedLesson(index);
    };

    return (
      <label key={index}>
        {lessons[index].title}
        <StyledCheckbox
          type="checkbox"
          checked={!!selectedLesson}
          value={index}
          onChange={toggleLesson}
        />
      </label>
    );
  });

  return <>{checkboxes}</>;
};

const LessonSelector = () => {
  const { setAllLesson } = useSelectedLessons();

  const onUncheckAll = () => {
    setAllLesson(false);
  };

  const onCheckAll = () => {
    setAllLesson(true);
  };

  return (
    <StyledLessonSelector>
      <LessonsCheckboxes />

      <Buttons>
        <StyledButton onClick={onUncheckAll}>Décocher tout</StyledButton>
        <StyledButton onClick={onCheckAll}>Cocher tout</StyledButton>
      </Buttons>
    </StyledLessonSelector>
  );
};

export default LessonSelector;
