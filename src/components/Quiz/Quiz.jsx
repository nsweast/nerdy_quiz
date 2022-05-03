import { PlayQuizLink, QuizBlock } from './Quiz.styles';

const Quiz = ({ category, id, amount }) => {
  return (
    <QuizBlock>
      <h3>{category}</h3>
      <span>{amount} questions in the category</span>
      <PlayQuizLink to={`/play/${id}`}>
        <strong>START QUIZ</strong>
      </PlayQuizLink>
    </QuizBlock>
  );
};

export default Quiz;
