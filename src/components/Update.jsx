import React from "react";
import styled from "styled-components";

const Update = ({ title, text }) => {
  return (
    <StForm>
      <StInput
        id="labeltitle"
        placeholder="글 제목을 입력하세요."
        value={title}
      ></StInput>

      <StInputText value={text} placeholder="내용을 입력하세요."></StInputText>

      <StButton>등록</StButton>
    </StForm>
  );
};

export default Update;

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
  text-align: center;
`;
