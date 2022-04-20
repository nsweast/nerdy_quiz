import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import PlayPage from '../pages/Play';
import MainPage from '../pages/MainPage';
import NoMatch from '../pages/NoMatch';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="home" element={<HomePage />} />
          <Route path="play/:quizId" element={<PlayPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
