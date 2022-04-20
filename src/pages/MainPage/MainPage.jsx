import { MainPageContainer } from './MainPage.styles';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

//TODO: make it not empty
const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <Outlet />
    </MainPageContainer>
  );
};

export default MainPage;
