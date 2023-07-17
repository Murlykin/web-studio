import styled from "@emotion/styled";

export const LightRight = styled.div`
  height: 200px;
  left: 0px;
  position: relative;
  background: var(--circle-color);
  opacity: 0.8;
  filter: blur(103.131px);
  transform: rotate(9.41deg);
  z-index: -1;

  @media screen and (min-width: 1200px) {
    position: absolute;
    width: 650px;
    height: 393.23px;
    left: 1000px;
    bottom: 342.77px;
    background: var(--circle-color);
    opacity: 0.8;
    filter: blur(103.131px);
    transform: rotate(9.41deg);
  }
`;

export default LightRight;