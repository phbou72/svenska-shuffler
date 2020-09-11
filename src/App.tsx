import React from "react";
import { random } from "lodash";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

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
  word: string[];
  inversedQuestion: boolean;
}

const MAX_LAST_WORDS = Math.floor(words.length * 0.35);

export default class App extends React.PureComponent<IProps, IState> {
  private static lastWords: string[][] = [];

  public state: IState = {
    word: ["", ""],
    inversedQuestion: false,
  };

  private static getRandomIndex() {
    return random(words.length - 1);
  }

  private static addWord(word: string[]) {
    if (App.lastWords.length === MAX_LAST_WORDS) {
      App.lastWords.shift();
    }
    App.lastWords.push(word);
  }

  private static getNewWord() {
    let word = words[App.getRandomIndex()];

    if (App.lastWords.length === 0) {
      App.addWord(word);
    } else {
      let hasNewWord = false;
      while (!hasNewWord) {
        let foundWord = false;
        for (let i = 0; i < App.lastWords.length; i++) {
          if (App.lastWords[i][0] === word[0]) {
            foundWord = true;
            break;
          }
        }

        if (!foundWord) {
          hasNewWord = true;
          App.addWord(word);
        } else {
          word = words[App.getRandomIndex()];
        }
      }
    }

    return word;
  }

  public constructor(props: IProps) {
    super(props);

    this.state = {
      word: App.getNewWord(),
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

  private onRandomClick() {
    this.setState({
      word: App.getNewWord(),
    });
  }

  private onInverseClick() {
    this.setState({
      inversedQuestion: !this.state.inversedQuestion,
      word: App.getNewWord(),
    });
  }

  private buildList() {
    const content = words.map((word) => (
      <li key={word[0]}>
        {word[0]}
        <span>:</span>
        {word[1]}
      </li>
    ));

    return <List>{content}</List>;
  }

  public render() {
    const { word, inversedQuestion } = this.state;

    const text = word;
    const question = !inversedQuestion ? 0 : 1;
    const answer = !inversedQuestion ? 1 : 0;
    return (
      <RecoilRoot>
        <StyledApp>
          <Quizz>
            <Card question={text[question]} answer={text[answer]} />
            <Buttons>
              <InverseButton onClick={this.onInverseClick}>
                Inverser
              </InverseButton>
              <RandomButton onClick={this.onRandomClick}>
                Randomiser
              </RandomButton>
            </Buttons>
          </Quizz>

          <Count>Number of words : {words.length}</Count>

          {this.buildList()}
        </StyledApp>
      </RecoilRoot>
    );
  }
}
