import styled from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

// 기존 SCSS와 동일한 구조
const MainContainer = styled.main`
  /* 기존과 동일하게 최소한의 스타일만 */
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
