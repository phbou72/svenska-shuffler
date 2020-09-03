import React from "react";
import { random } from "lodash";

import Card from "./Card";
import words from "./words";

interface IProps {}
interface IState {}

export default class App extends React.Component<IProps, IState> {
  public render() {
    return (
      <>
        <Card text={words[random(words.length - 1)]} />
      </>
    );
  }
}
