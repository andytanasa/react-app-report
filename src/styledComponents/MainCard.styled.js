import styled from "styled-components";

export const StyledMainCard = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 20px;
  margin: 50px auto 20px;
  color: white;
  background-color: ${({ theme }) => theme.neutral.darkBlue};

  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 100%;
    margin: 0 auto;
    margin-right: 10px;
  }
`;
export const HeaderCard = styled.div`
  background-color: ${({ theme }) => theme.primary.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 65%;

  margin-bottom: 30px;
  & > div:first-child {
    padding-left: 20px;
  }
  & > div:nth-child(2) {
    width: 70%;
    padding-left: 20px;
    h4,
    h2 {
      font-weight: 400;
      letter-spacing: 1px;
      color: #ccc;
    }
  }
  img {
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 5px solid white;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    img {
      width: 100px;
      height: 100px;
    }
    h4 {
      font-size: 1.2em;
    }
    h2 {
      font-size: 2.4em;
    }
  }
`;
export const HeaderContent = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;

  & > li {
    list-style: none;
    width: 100%;
    padding: 10px;
    a {
      text-decoration: none;
      color: #ccc;
    }
    &:hover {
      background-color: ${({ theme }) => theme.neutral.desaturateBlue};
      color: #f4f4f4;
    }
  }
  & > li:nth-child(2) {
    a {
      color: white;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: column;
    text-align: left;
    & > li {
      padding: 10px;
      align-self: flex-start;
    }
  } ;
`;
