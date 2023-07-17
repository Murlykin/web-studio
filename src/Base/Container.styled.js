import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 105px;
  justify-content: center;
  margin-bottom: 100px;
  flex-direction: column;

@media screen and (min-width: 1200px) {

      flex-direction: row;
}
`;
export default  Container;