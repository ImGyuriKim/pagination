import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 10em;
  height: auto;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 60px;

  button {
    background-color: grey;
    border: none;
    font-size: 60px;
    :hover {
      cursor: pointer;
      background-color: lightgray;
    }
  }
`;
function Pagination() {
  // 페이지 숫자 로딩용
  //TODO props로 받아서 업데이트해주기
  const pages = [1, 2, 3, 4, 5];

  return (
    <Container>
      <button> {"<"} </button>
      {pages.map((el) => {
        return <div>{el}</div>;
      })}
      <button> {">"} </button>
    </Container>
  );
}

export default Pagination;
