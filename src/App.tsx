import React from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

import Quizz from "./Quizz";
import ListOfWords from "./ListOfWords";
import WordsCount from "./WordsCount";

const StyledApp = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface IProps {}
interface IState {}

export default class App extends React.PureComponent<IProps, IState> {
  // public componentDidMount() {
  //   document.addEventListener("keydown", this.onKeyDown);
  // }

  // public componentWillUnmount() {
  //   document.removeEventListener("keydown", this.onKeyDown);
  // }

  // private onKeyDown(e: any) {
  //   switch (e.key) {
  //     case "r":
  //       this.onRandomClick();
  //       break;

  //     case "i":
  //       this.onInverseClick();
  //       break;
  //   }
  // }

  public render() {
    return (
      <RecoilRoot>
        <StyledApp>
          <Quizz />
          <WordsCount />
          <ListOfWords />
        </StyledApp>
      </RecoilRoot>
    );
  }
}
