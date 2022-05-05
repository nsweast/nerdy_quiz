import { HeaderLinkStyled } from './HeaderLink.styles';
import { ALL_COLORS, ALL_HEADER_TYPES } from '../../constants';
import { randomNumber } from '../../helpers';
import { useContext } from 'react';
import { QuizContext } from '../../context';

const HeaderLink = ({ type }) => {
  const context = useContext(QuizContext);

  switch (type) {
    case ALL_HEADER_TYPES.lucky:
      return (
        <HeaderLinkStyled
          bg={ALL_COLORS.yellow}
          to={`/play/${
            context.fetchedQuizIds[
              randomNumber(0, context.fetchedQuizIds.length - 1)
            ]
          }`}
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
