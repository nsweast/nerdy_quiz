import { HeaderStyled } from './Header.styles';
import HeaderLink from '../HeaderLink';
import { useContext } from 'react';
import { QuizContext } from '../../context';
import { ALL_PAGES, ALL_HEADER_TYPES } from '../../constants';

const Header = () => {
  const context = useContext(QuizContext);

  switch (context.currentPage) {
    case ALL_PAGES.home:
      return (
        <HeaderStyled>
          <HeaderLink type={ALL_HEADER_TYPES.lucky} />
          <HeaderLink type={ALL_HEADER_TYPES.history} />
        </HeaderStyled>
      );

    case ALL_PAGES.play:
      return (
        <HeaderStyled>
          <HeaderLink type={ALL_HEADER_TYPES.cancel} />
        </HeaderStyled>
      );

    case ALL_PAGES.result:
      return (
        <HeaderStyled>
          <HeaderLink type={ALL_HEADER_TYPES.return} />
        </HeaderStyled>
      );
    case ALL_PAGES.history:
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
