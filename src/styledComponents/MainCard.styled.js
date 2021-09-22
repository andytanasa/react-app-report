import styled from "styled-components";

export const StyledMainCard = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 20px;
  margin: 50px auto 20px;
  color: white;
  background-color: ${({ theme }) => theme.neutral.darkBlue};
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
`;
export const HeaderContent = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > li {
    list-style: none;
    a {
      text-decoration: none;
      color: #ccc;
    }
  }
  & > li:nth-child(2) {
    a {
      color: white;
    }
  }
`;
