import * as React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 5px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  max-width: 250px;
  min-height: 150px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

const Button = styled.button`
  display: block;
  margin: 20px;
  background-color: #6699cc;
  border-color: #6699cc;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 12px;
`;

interface IProps {
  question: string;
  answer: string;
}
interface IState {
  showAnswer: boolean;
}

export default class Card extends React.PureComponent<IProps, IState> {
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

  public componentDidUpdate(nextProps: IProps) {
    if (nextProps.question !== this.props.question) {
      this.setState({
        showAnswer: false,
      });
    }
  }

  public render() {
    return (
      <StyledCard>
        {!this.state.showAnswer && this.props.question}
        {this.state.showAnswer && this.props.answer}
        {!this.state.showAnswer && (
          <Button onClick={this.onShowAnswerClick}>Answer</Button>
        )}
      </StyledCard>
    );
  }
}
