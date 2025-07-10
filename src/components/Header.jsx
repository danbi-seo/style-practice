import styled, { css } from 'styled-components';
import { flexContainer } from './mixin';

const HeaderContainer = styled.div`
  ${flexContainer('flex', 'space-between', 'center', 'row', '20px', 'nowrap', '10px 20px')}
  background-color: black;
  color: white;

  ul {
    ${flexContainer('flex', 'center', 'center', 'row', '20px', 'nowrap')}
    list-style: none;
    margin: 0;
  }
`;


const Header = () => {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;