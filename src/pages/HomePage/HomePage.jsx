import { HomeContainer } from './HomePage.styles';
import Quiz from '../../components/Quiz';
import { useEffect, useState } from 'react';
import Loading from '../../components/common/Loading';
import { shuffleArray } from '../../helpers';
import { getCategories, getTotalAmount } from '../../providers/';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getCategories()
      .then((categories) => shuffleArray(categories).slice(0, 10))
      .then((randomTen) =>
        randomTen.map(async (category) => {
          return {
            ...category,
            amount: await getTotalAmount(category.id),
          };
        })
      )
      .then((promises) => Promise.all(promises))
      .then((info) => {
        setCategories(info);
        setLoaded(true);
      });
  }, []);

  if (!loaded) {
    return (
      <HomeContainer>
        <Loading />
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      {categories.map((category) => (
        <Quiz
          key={category.id}
          id={category.id}
          amount={category.amount}
          category={category.name}
        />
      ))}
    </HomeContainer>
  );
};

export default HomePage;
