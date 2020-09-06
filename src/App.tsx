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
  display: flex;
  justify-content: center;
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
  border-style: none;
`;

const InverseButton = styled.button`
  margin-top: 20px;
  background-color: #6699cc;
  border-color: #6699cc;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 12px;
  border-style: none;
`;

const Quizz = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  span {
    margin: 0 8px;
  }
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
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  public componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  public componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  private onKeyDown(e: any) {
    switch (e.key) {
      case "r":
        this.onRandomClick();
        break;

      case "i":
        this.onInverseClick();
        break;
    }
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

  private buildList() {
    const content = words.map((word) => (
      <li>
        {word[0]}
        <span>:</span>
        {word[1]}
      </li>
    ));

    return <List>{content}</List>;
  }

  public render() {
    const { wordIndex, inversedQuestion } = this.state;

    const text = words[wordIndex];
    const question = !inversedQuestion ? 0 : 1;
    const answer = !inversedQuestion ? 1 : 0;
    return (
      <StyledApp>
        <Quizz>
          <Card question={text[question]} answer={text[answer]} />
          <Buttons>
            <InverseButton onClick={this.onInverseClick}>
              Inverser
            </InverseButton>
            <RandomButton onClick={this.onRandomClick}>Randomiser</RandomButton>
          </Buttons>
        </Quizz>

        <Count>Number of words : {words.length}</Count>

        {this.buildList()}
      </StyledApp>
    );
  }
}
