import { HeaderStyled } from './Header.styles';
import HeaderLink from '../HeaderLink';
import { useEffect, useState } from 'react';
import { ALL_HEADER_TYPES } from '../../constants';
import { useLocation, useParams } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const { quizId } = useParams();

  const [page, setPage] = useState(pathname);

  useEffect(() => {
    setPage(pathname);
  }, [pathname]);

  switch (page) {
    case '/':
      return (
        <HeaderStyled>
          <HeaderLink type={ALL_HEADER_TYPES.lucky} />
          <HeaderLink type={ALL_HEADER_TYPES.history} />
        </HeaderStyled>
      );
    case '/play/' + quizId:
      return (
        <HeaderStyled>
          <HeaderLink type={ALL_HEADER_TYPES.cancel} />
        </HeaderStyled>
      );
    case '/result':
      return (
        <HeaderStyled>
          <HeaderLink type={ALL_HEADER_TYPES.return} />
        </HeaderStyled>
      );
    case '/history':
      return (
        <HeaderStyled>
          <HeaderLink type={ALL_HEADER_TYPES.return} />
        </HeaderStyled>
      );
    default:
      return null;
  }
};

export default Header;
