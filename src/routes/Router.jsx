import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlayPage from '../pages/PlayPage';
import MainPage from '../pages/MainPage';
import NoMatch from '../pages/NoMatch';
import FinishPage from '../pages/FinishPage';
import HistoryPage from '../pages/HistoryPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="play/:quizId" element={<PlayPage />} />
          <Route path="finish" element={<FinishPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
