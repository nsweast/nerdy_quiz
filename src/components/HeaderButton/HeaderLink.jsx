import { HeaderLinkStyled } from './HeaderLink.styles';
import { ALL_COLORS } from '../../constants';
import { randomNumber } from '../../helpers';

const HeaderLink = ({ fg, bg, type }) => {
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
      <HeaderLinkStyled bg={ALL_COLORS.red} fg={ALL_COLORS.white} to="/">
        <strong>CANCEL</strong>
      </HeaderLinkStyled>
    );
  }

  return null;
};

export default HeaderLink;
