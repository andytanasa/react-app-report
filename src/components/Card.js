import React from "react";
import {
  SecondCard,
  SecondCardContent,
} from "../styledComponents/SecondCard.styled";
import { BsThreeDots } from "react-icons/bs";
const Card = ({ item }) => {
  // console.log(item);
  return (
    <SecondCard bg={item.bg}>
      <img src={item.icon} alt="" />`
      <SecondCardContent>
        <div>
          <h5>{item.title}</h5>
          <h2>{item.timeframes.weekly.current}hrs</h2>
        </div>
        <div>
          <button>
            <BsThreeDots />
          </button>
          <p>Last Week - {item.timeframes.weekly.previous}hrs</p>
        </div>
      </SecondCardContent>
      `
    </SecondCard>
  );
};

export default Card;
