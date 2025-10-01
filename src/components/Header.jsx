import styled from "styled-components";

// 헤더 컨테이너
const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// 헤더 내부 래퍼
const HeaderWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

// 로고 스타일
const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// 메뉴 컨테이너
const MenuContainer = styled.ul`
  display: flex;
  gap: 32px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

// 메뉴 아이템
const MenuItem = styled.li`
  list-style: none;
  font-size: 15px;
  font-weight: 500;
  color: #2d3748;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #667eea;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>OZ코딩스쿨</Logo>
        <MenuContainer>
          <MenuItem>로그인</MenuItem>
          <MenuItem>회원가입</MenuItem>
          <MenuItem>내클래스</MenuItem>
        </MenuContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
