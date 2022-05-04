import { HeaderLinkStyled } from './HeaderLink.styles';
import { ALL_COLORS, ALL_HEADER_TYPES } from '../../constants';
import { randomNumber } from '../../helpers';
import { useContext } from 'react';
import { QuizContext } from '../../context';
import { ALL_PAGES } from '../../constants';

const HeaderLink = ({ type }) => {
  const context = useContext(QuizContext);

  switch (type) {
    case ALL_HEADER_TYPES.lucky: //TODO: make fully really random
      return (
        <HeaderLinkStyled
          bg={ALL_COLORS.yellow}
          to={`/play/${randomNumber(9, 18)}`}
          onClick={() => context.pageSwitcher(ALL_PAGES.play)}
        >
          <strong>I'M LUCKY!</strong>
        </HeaderLinkStyled>
      );
    case ALL_HEADER_TYPES.history:
      return (
        <HeaderLinkStyled
          bg={ALL_COLORS.purple}
          fg={ALL_COLORS.white}
          to="/history"
          onClick={() => context.pageSwitcher(ALL_PAGES.history)}
        >
          <strong>HISTORY</strong>
        </HeaderLinkStyled>
      );
    case ALL_HEADER_TYPES.cancel:
      return (
        <HeaderLinkStyled
          bg={ALL_COLORS.red}
          fg={ALL_COLORS.white}
          to="/"
          onClick={() => {
            context.clearCurrentSession();
            context.pageSwitcher(ALL_PAGES.home);
          }}
        >
          <strong>CANCEL</strong>
        </HeaderLinkStyled>
      );
    case ALL_HEADER_TYPES.return:
      return (
        <HeaderLinkStyled
          bg={ALL_COLORS.green}
          fg={ALL_COLORS.white}
          to="/"
          onClick={() => {
            context.clearCurrentSession();
            context.pageSwitcher(ALL_PAGES.home);
          }}
        >
          <strong>BACK HOME</strong>
        </HeaderLinkStyled>
      );
    default:
      return null;
  }
};

export default HeaderLink;
