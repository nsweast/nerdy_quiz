import { HeaderLinkStyled } from './HeaderLink.styles';
import { ALL_COLORS } from '../../constants';
import { randomNumber } from '../../helpers';
import { useContext } from 'react';
import { QuizContext } from '../../context';

const HeaderLink = ({ fg, bg, type }) => {
  const context = useContext(QuizContext);

  if (type === 'lucky') {
    return (
      <HeaderLinkStyled
        bg={ALL_COLORS.yellow}
        to={`/play/${randomNumber(9, 18)}`}
      >
        <strong>I'M LUCKY!</strong>
      </HeaderLinkStyled>
    );
  }

  if (type === 'history') {
    return (
      <HeaderLinkStyled
        bg={ALL_COLORS.purple}
        fg={ALL_COLORS.white}
        to="/result"
      >
        <strong>HISTORY</strong>
      </HeaderLinkStyled>
    );
  }

  if (type === 'cancel') {
    return (
      <HeaderLinkStyled
        bg={ALL_COLORS.red}
        fg={ALL_COLORS.white}
        to="/"
        onClick={context.clearCurrentSession}
      >
        <strong>CANCEL</strong>
      </HeaderLinkStyled>
    );
  }

  return null;
};

export default HeaderLink;
