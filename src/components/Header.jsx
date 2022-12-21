import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <div>
        <h1>HAPPY NEW YEAR</h1>
      </div>
      <div>Login</div>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  background-color: #850000;
  color: #f8ede3;
  display: flex;
  justify-content: space-between;
  box-align: center;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 24px;
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
`;
