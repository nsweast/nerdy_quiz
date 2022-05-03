import { HeaderStyled, NavLeft, NavRight } from './Header.styles';
import HeaderLink from '../HeaderButton';
import { useParams } from 'react-router-dom';
import { isObjectEmpty } from '../../helpers';

const Header = () => {
  const params = useParams();

  console.log(params);

  return (
    <HeaderStyled>
      <NavLeft>
        <HeaderLink type={isObjectEmpty(params) ? 'lucky' : 'cancel'} />
      </NavLeft>
      <NavRight>
        <HeaderLink type={isObjectEmpty(params) ? 'history' : null} />
      </NavRight>
    </HeaderStyled>
  );
};

export default Header;
