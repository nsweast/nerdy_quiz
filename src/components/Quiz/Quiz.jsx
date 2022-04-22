import { PlayQuizLink, QuizBlock } from './Quiz.styles';

const Quiz = ({ category, id, amount }) => {
  return (
    <QuizBlock>
      <h4>{category}</h4>
      <span>{amount} questions in the category</span>
      <PlayQuizLink to={`/play/${id}`}>
        <strong>START QUIZ</strong>
      </PlayQuizLink>
    </QuizBlock>
  );
};

export default Quiz;
