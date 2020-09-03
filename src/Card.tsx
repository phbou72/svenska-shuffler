import * as React from "react";

interface IProps {
  text: string[];
}
interface IState {
  showAnswer: boolean;
}

export default class Card extends React.Component<IProps, IState> {
  public state: IState = {
    showAnswer: false,
  };

  public constructor(props: IProps) {
    super(props);

    this.onShowAnswerClick = this.onShowAnswerClick.bind(this);
  }

  private onShowAnswerClick() {
    this.setState({
      showAnswer: true,
    });
  }

  public render() {
    return (
      <div>
        {!this.state.showAnswer && this.props.text[0]}
        {this.state.showAnswer && this.props.text[1]}
        {!this.state.showAnswer && (
          <button onClick={this.onShowAnswerClick}>Show Answer</button>
        )}
      </div>
    );
  }
}
