import styled from "styled-components";

export const SecondCard = styled.div`
  background-color: ${({ bg }) => bg};
  background-position: right top;
  border-radius: 20px;
  width: 350px;
  height: 200px;
  margin: 0 auto 20px;
  padding-top: 50px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 215px;
  }
`;

export const SecondCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75%;
  background-color: ${({ theme }) => theme.neutral.darkBlue};
  position: absolute;
  bottom: 0;
  border-radius: 20px;
  z-index: 3;
  div {
    padding-left: 30px;
    padding-right: 10px;
    h2 {
      font-size: 2rem;
      font-weight: 300;
      color: #ccc;
    }
    h5 {
      font-size: 1.2rem;
      color: #ccc;
      margin-bottom: 10px;
      font-weight: 300;
    }
    p {
      color: #ccc;
      font-weight: 300;
    }
    button {
      font-size: 1.5em;
      background: inherit;
      color: #ccc;
      border: none;
      margin-left: 100px;
      &:hover {
        transform: scale(0.85);
      }
    }
  }
`;
