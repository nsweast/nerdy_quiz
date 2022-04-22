import { PlayQuizButton, QuizBlock } from './Quiz.styles';

const Quiz = ({ category, id, amount }) => {
  return (
    <QuizBlock>
      <h4>{category}</h4>
      <span>{amount} questions in the category</span>
      <PlayQuizButton to={`/play/${id}`}>
        <strong>START QUIZ</strong>
      </PlayQuizButton>
    </QuizBlock>
  );
};

export default Quiz;
