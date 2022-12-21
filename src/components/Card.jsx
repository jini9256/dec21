import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { delCard } from "../redux/modules/cards";
import Modal from "./Modal";
import Update from "./Update";

const Letter = ({ card }) => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const deleteClick = () => {
    if (window.confirm(`[${card.title}] 글을 정말 삭제하시겠습니까?`)) {
      dispatch(delCard(card.id));
    }
  };

  return (
    <>
      <StLetter>
        <h3>{card.title}</h3>
        <span>{card.text}</span>

        <div>
          <StBtn onClick={openModal}>상세보기</StBtn>
          <Modal open={modalOpen} close={closeModal} header="상세보기">
            {/* <span>ID : {card?.id}</span> */}
            {/* <Update /> */}
            <h2>{card?.title}</h2>
            <h4>{card?.text}</h4>
            <StButton>수정</StButton>
          </Modal>
          {/* <StBtn>수정</StBtn> */}
          <StBtn onClick={deleteClick}>삭제</StBtn>
        </div>
      </StLetter>
    </>
  );
};

export default Letter;

const StLetter = styled.div`
  border: 1px solid #eb455f;
  width: 50px;
  height: auto;
  margin: 10px;
  /* background-color: #eb455f; */
  width: 90%;
  border-radius: 12px;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const StBtn = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 60px;
  border-radius: 12px;
  margin: 5px;
`;
const StButton = styled.button`
  border: none;
  background-color: #eb455f;
  color: white;
  height: 35px;
  cursor: pointer;
  width: 80px;
  border-radius: 20px;
  margin: 5px;
`;
