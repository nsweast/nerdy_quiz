import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlayPage from '../pages/PlayPage';
import MainPage from '../pages/MainPage';
import NoMatch from '../pages/NoMatch';
import ResultPage from '../pages/ResultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="play/:quizId" element={<PlayPage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
