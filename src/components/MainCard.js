import {
  StyledMainCard,
  HeaderCard,
  HeaderContent,
} from "../styledComponents/MainCard.styled";

const MainCard = () => {
  return (
    <>
      <StyledMainCard>
        <HeaderCard>
          <div>
            <img src="./images/image-jeremy.png" alt="" />
          </div>
          <div>
            <h4>Report for</h4>
            <h2>Jeremy Robson</h2>
          </div>
        </HeaderCard>
        <HeaderContent>
          <li>
            <a href="/">Daily</a>
          </li>
          <li>
            <a href="/">Weekly</a>
          </li>
          <li>
            <a href="/">Monthly</a>
          </li>
        </HeaderContent>
      </StyledMainCard>
    </>
  );
};

export default MainCard;
