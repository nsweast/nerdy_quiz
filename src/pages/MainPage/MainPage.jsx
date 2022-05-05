import { MainPageContainer } from './MainPage.styles';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <Outlet />
    </MainPageContainer>
  );
};

export default MainPage;
