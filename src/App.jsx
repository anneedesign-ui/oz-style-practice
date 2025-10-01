import styled from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

// Styled Components 정의
const MainContainer = styled.main`
  /* App.scss의 전역 스타일이 필요하다면 여기에 추가 */
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
`;

function App() {
  return (
    <MainContainer>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </MainContainer>
  );
}

export default App;
