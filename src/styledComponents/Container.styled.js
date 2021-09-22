import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 1440px;
    height: 100%;
    margin: 200px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Container1 = styled.div`
  width: 375px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 30%;
    height: 450px;
    margin-right: 0;
  }
`;
export const Container2 = styled.div`
  width: 375px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 100%;
    height: 450px;
    margin-left: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-grid: 20px;
  }
`;
