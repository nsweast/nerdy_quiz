import { HeaderStyled, NavLeft, NavRight } from './Header.styles';
import { HeaderButtonStyled } from './HeaderButton.styles';
import {ALL_COLORS} from '../../constants';

const Header = () => {
  return (
    <HeaderStyled>
      <NavLeft>
        <HeaderButtonStyled bg={ALL_COLORS.yellow}><strong>I'M LUCKY!</strong></HeaderButtonStyled>
      </NavLeft>
      <NavRight>
        <HeaderButtonStyled bg={ALL_COLORS.purple} fg={ALL_COLORS.white}><strong>HISTORY</strong></HeaderButtonStyled>
      </NavRight>
    </HeaderStyled>
  )
}

export default Header