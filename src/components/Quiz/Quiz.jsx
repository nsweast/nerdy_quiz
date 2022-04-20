import { PlayQuizButton, QuizBlock } from './Quiz.styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { getQuestionsAmount } from '../../providers';

const Quiz = ({ category, id }) => {
  const [questionsAmount, setQuestionsAmount] = useState(0);

  useEffect(() => {
    getQuestionsAmount(id).then((data) =>
      setQuestionsAmount(data.category_question_count.total_question_count)
    );
  }, []);

  //TODO: render only when they are fetched
  return (
    <QuizBlock>
      <h4>{category}</h4>
      <span>
        {!!questionsAmount && questionsAmount} questions in the category
      </span>
      <PlayQuizButton to="/play_quiz">
        <strong>START QUIZ</strong>
      </PlayQuizButton>
    </QuizBlock>
  );
};

export default Quiz;
