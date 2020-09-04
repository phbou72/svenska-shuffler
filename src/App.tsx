import React from "react";
import { random } from "lodash";
import styled from "styled-components";

import Card from "./Card";
import words from "./words";

const StyledApp = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  button:first-child {
    margin-right: 8px;
  }
`;

const RandomButton = styled.button`
  margin-top: 20px;
  background-color: #6699cc;
  border-color: #6699cc;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 12px;
`;

const InverseButton = styled.button`
  margin-top: 20px;
  background-color: #6699cc;
  border-color: #6699cc;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 12px;
`;

interface IProps {}
interface IState {
  wordIndex: number;
  inversedQuestion: boolean;
}

export default class App extends React.PureComponent<IProps, IState> {
  public state: IState = {
    wordIndex: 0,
    inversedQuestion: false,
  };

  public constructor(props: IProps) {
    super(props);

    this.state = {
      wordIndex: this.getRandomIndex(),
      inversedQuestion: false,
    };

    this.onRandomClick = this.onRandomClick.bind(this);
    this.onInverseClick = this.onInverseClick.bind(this);
  }

  private getRandomIndex() {
    return random(words.length - 1);
  }

  private onRandomClick() {
    this.setState({
      wordIndex: this.getRandomIndex(),
    });
  }

  private onInverseClick() {
    this.setState({
      inversedQuestion: !this.state.inversedQuestion,
      wordIndex: this.getRandomIndex(),
    });
  }

  public render() {
    const { wordIndex, inversedQuestion } = this.state;

    const text = words[wordIndex];
    const question = !inversedQuestion ? 0 : 1;
    const answer = !inversedQuestion ? 1 : 0;
    return (
      <StyledApp>
        <Card question={text[question]} answer={text[answer]} />
        <Buttons>
          <InverseButton onClick={this.onInverseClick}>Inverse</InverseButton>
          <RandomButton onClick={this.onRandomClick}>Randomize</RandomButton>
        </Buttons>
      </StyledApp>
    );
  }
}
