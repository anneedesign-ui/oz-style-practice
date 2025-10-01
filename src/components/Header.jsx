import styled from "styled-components";

// Styled Components 정의
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: black;
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  list-style: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: #d7fa00;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>OZ코딩스쿨</Title>
      <MenuContainer>
        <MenuItem>로그인</MenuItem>
        <MenuItem>회원가입</MenuItem>
        <MenuItem>내클래스</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
}
