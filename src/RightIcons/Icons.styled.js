import styled from "@emotion/styled";

export const Icones = styled.div`
  display: flex;
  position: absolute;
  z-index: -5;
  margin-top: -900px;

  @media screen and (min-width: 1200px) {
    display: flex;
    position: relative;
    z-index: 0;
    margin-top: 0px;
  }
`;
export const IconesPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  padding-top: 35px;
  margin-left: 37px;
`;

export const IconesPositionRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const PositionRightBottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const IconesPositionRightBottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
`;

export const IconesPositionLeft = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
