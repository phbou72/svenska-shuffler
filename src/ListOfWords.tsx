import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import flattenedWords from "./states/flattenedWords";

const StyledListOfWords = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  span {
    margin: 0 8px;
  }
`;

const ListOfWords = () => {
  const words = useRecoilValue(flattenedWords);

  const content = words.map((word) => (
    <li key={word[0]}>
      {word[0]}
      <span>:</span>
      {word[1]}
    </li>
  ));
  return <StyledListOfWords>{content}</StyledListOfWords>;
};

export default ListOfWords;
