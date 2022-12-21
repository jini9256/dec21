import { v4 as uuidv4 } from "uuid";

//Action.Value
// 오류를 잡기위해서 따로 써주는게 좋기때문에

// 편지를 추가하는 버튼
const ADD_CARD = "ADD_CARD";

// 작성된 편지를 삭제하는 버튼
const DEL_CARD = "DEL_CARD";

// 작성된 편지를 수정하는 버튼
const UPDATE_CARD = "UPDATE_CARD";

//Action.Creator

export const addCard = (payload) => {
  return {
    type: ADD_CARD,
    payload,
  };
};

export const delCard = (payload) => {
  return {
    type: DEL_CARD,
    payload,
  };
};

export const updateCard = (payload) => {
  return {
    type: UPDATE_CARD,
    payload,
  };
};

//Initial.State

const initialState = [
  {
    id: uuidv4(),
    title: "2023년 화이팅",
    text: "내년에도 꿈꾸는 일 모두 이루길!",
  },
  { id: uuidv4(), title: "프론트엔드개발자되기", text: "미리 축하해🥳🥳 " },
];

//Reducer

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];

    case DEL_CARD:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

//export.default.reducer

export default cards;
