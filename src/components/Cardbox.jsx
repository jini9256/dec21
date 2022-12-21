import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Cardbox = () => {
  const card = useSelector((state) => state.cards);

  return (
    <StBox>
      <h2>-Card Box-</h2>
      <p>💌 {card.length}개의 카드가 있습니다.</p>

      {card.map((item) => {
        return <Card card={item} key={item.id} />;
      })}
    </StBox>
  );
};

export default Cardbox;

const StBox = styled.div`
  background-color: #FCFFE7
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 24px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
