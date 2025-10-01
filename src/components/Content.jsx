import styled from "styled-components";

// 카드 컨테이너 - 크기 원상복구
const ContentCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

// 이미지 래퍼 - 기존 크기로 복원
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 225px; /* 원래 사이즈로 복원 */
  overflow: hidden;
  background: #f7fafc;

  /* 이미지 위에 어두운 오버레이 유지 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 1;
    transition: background 0.3s ease;
  }

  ${ContentCard}:hover &::before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.05) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

// 이미지 - 기존 크기 유지
const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ContentCard}:hover & {
    transform: scale(1.05); /* 줌 효과 약간 줄임 */
  }
`;

// 모집중 태그 - 크기 약간 조정
const Tag = styled.span`
  position: absolute;
  top: 16px; /* 원래 위치로 */
  left: 16px; /* 원래 위치로 */
  font-size: 12px; /* 원래 크기로 */
  font-weight: 700;
  letter-spacing: 0.5px;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 8px 16px; /* 약간 줄임 */
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.5);
  z-index: 2;
  text-transform: uppercase;
  animation: pulse 2s ease-in-out infinite;

  /* 테두리 추가로 더욱 강조 */
  border: 2px solid rgba(255, 255, 255, 0.3);

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.5);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 6px 25px rgba(102, 126, 234, 0.7);
    }
  }

  ${ContentCard}:hover & {
    animation: none;
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(102, 126, 234, 0.8);
  }
`;

// 콘텐츠 정보 영역 - 패딩 원상복구
const ContentInfo = styled.div`
  padding: 20px; /* 원래대로 줄임 */
  display: flex;
  flex-direction: column;
  gap: 8px; /* 원래대로 줄임 */
  flex: 1;
  background: white;
`;

// 제목 - 크기 원상복구
const Title = styled.h3`
  font-size: 16px; /* 원래 크기로 */
  font-weight: 600;
  color: #1a202c;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;

  ${ContentCard}:hover & {
    color: #667eea;
  }
`;

// 부제목 - 크기 원상복구
const Subtitle = styled.p`
  font-size: 12px; /* 원래 크기로 */
  font-weight: 400;
  color: #718096;
  margin: 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default function Content({ content }) {
  return (
    <ContentCard>
      <ImageWrapper>
        <ContentImage src={content.img} alt={content.title} />
        <Tag>모집중</Tag>
      </ImageWrapper>
      <ContentInfo>
        <Title>{content.title}</Title>
        <Subtitle>{content.subtitle}</Subtitle>
      </ContentInfo>
    </ContentCard>
  );
}
