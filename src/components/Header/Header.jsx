import { HeaderStyled, NavLeft, NavRight } from './Header.styles';
import { HeaderButtonStyled } from './HeaderButton.styles';
import { ALL_COLORS } from '../../constants';
import { randomNumber } from '../../helpers';

const Header = () => {
  return (
    <HeaderStyled>
      <NavLeft>
        <HeaderButtonStyled
          bg={ALL_COLORS.yellow}
          to={`/play/${randomNumber(9, 18)}`}
        >
          <strong>I'M LUCKY!</strong>
        </HeaderButtonStyled>
      </NavLeft>
      <NavRight>
        <HeaderButtonStyled
          bg={ALL_COLORS.purple}
          fg={ALL_COLORS.white}
          to="/home"
        >
          <strong>HISTORY</strong>
        </HeaderButtonStyled>
      </NavRight>
    </HeaderStyled>
  );
};

export default Header;
