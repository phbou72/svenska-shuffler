import { useEffect } from "react";
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
  border-style: none;
`;

interface IProps {
  question: string | null;
  answer: string | null;
  showAnswer: boolean;
  setShowAnswer: (showAnswer: boolean) => void;
}

const Card = (props: IProps) => {
  const { question, answer, showAnswer, setShowAnswer } = props;

  const toggleShowAnswer = (e: any) => {
    if (e.key === "a") {
      setShowAnswer(!showAnswer);
    }
  };

  const onShowQuestionClick = () => {
    setShowAnswer(false);
  };

  const onShowAnswerClick = () => {
    setShowAnswer(true);
  };

  useEffect(() => {
    window.addEventListener("keydown", toggleShowAnswer);
    return () => {
      window.removeEventListener("keydown", toggleShowAnswer);
    };
  });

  return (
    <StyledCard>
      {!showAnswer && question}
      {showAnswer && answer}
      {showAnswer && <Button onClick={onShowQuestionClick}>Revoir</Button>}
      {!showAnswer && <Button onClick={onShowAnswerClick}>Réponse</Button>}
    </StyledCard>
  );
};

export default Card;
