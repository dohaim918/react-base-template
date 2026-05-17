import styled from "@emotion/styled"
import { T, alpha } from "@/styles/theme"

// 히어로 섹션 하단 스크롤 유도 인디케이터
// 사용: <ScrollIndicator color={T.pink} />
export default function ScrollIndicator({ color = T.pink }) {
  return (
    <Wrap>
      <Line $color={color} />
      <Chev $color={color} />
      <Label $color={color}>SCROLL</Label>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: absolute;
  bottom: ${T.spacing[24]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${T.spacing[8]};
`

const Line = styled.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, ${({ $color }) => alpha($color, 0.8)});
  margin-bottom: -13px;
  animation: scrollBounce 2s ease-in-out infinite;
`

const Chev = styled.div`
  width: 10px;
  height: 10px;
  border-right: 1px solid ${({ $color }) => $color};
  border-bottom: 1px solid ${({ $color }) => $color};
  transform: rotate(45deg);
  animation: scrollChevBounce 2s ease-in-out infinite;
`

const Label = styled.span`
  font-size: ${T.fontSize.xs};
  letter-spacing: 4px;
  color: ${({ $color }) => alpha($color, 0.53)};
  text-transform: uppercase;
`
