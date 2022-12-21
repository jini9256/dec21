import Modal from "./Modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCard } from "../redux/modules/cards";
import { v4 as uuidv4 } from "uuid";

const Addform = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  const submitMode = (event) => {
    event.preventDefault();

    const newCard = {
      title,
      text,
      id: uuidv4(),
    };

    dispatch(addCard(newCard));

    // console.log(newCard);

    setTitle("");
    setText("");
  };

  return (
    <div>
      <div>
        <h2>어떤 소원을 빌고 싶으세요?</h2>
      </div>
      <div>
        <StButton onClick={openModal}>글쓰기</StButton>
        <Modal open={modalOpen} close={closeModal} header="HAPPY NEW YEAR">
          <StForm onSubmit={submitMode}>
            {/* <label htmlFor="labeltitle">제목</label> */}
            <StInput
              onChange={changeTitle}
              id="labeltitle"
              placeholder="글 제목을 입력하세요."
              value={title}
            ></StInput>

            <StInputText
              onChange={changeText}
              value={text}
              placeholder="내용을 입력하세요."
            ></StInputText>

            <StButton>등록</StButton>
          </StForm>
        </Modal>
      </div>
    </div>
  );
};

export default Addform;

const StForm = styled.form`
  /* background-color: #ffc7c7; */
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  /* margin-bottom: 24px; */
`;

const StInput = styled.input`
  border: 1px solid #dfd3c3;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
  text-align: center;
`;

// 텍스트가 들어가는 창은 텍스트에디터를 써도 될듯
const StInputText = styled.input`
  width: 90%;
  min-height: 200px;
  border-radius: 12px;
  outline: none;
  border: 1px solid #dfd3c3;
  /* padding: 0 10px; */
  text-align: center;
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
