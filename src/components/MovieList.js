import styled from "styled-components";
import { useState } from "react";
import Pagination from "./Pagination";

const Container = styled.div`
  display: flex;
  width: 80em;
  flex-wrap: wrap;
`;

const List = styled.div`
  margin-left: 50px;
  .title {
    font-size: larger;
    font-weight: bold;
  }

  .poster {
    width: 15em;
  }
`;

function MovieList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // 첫 렌더링 + page 수 증가 시, fetch 요청 작성

  const fetchData = async () => {
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      })
      .catch((err) => console.error(err));
  };

  fetchData();

  return (
    <div>
      <h1>영화 리스트</h1>
      <Container>
        {data &&
          data.map((el) => (
            <List key={el.id}>
              <div className="title">{el.original_title}</div>
              <img
                className="poster"
                // 사진 주소 입력
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`}
                alt={el.original_title}
              ></img>
            </List>
          ))}
        <Pagination />
      </Container>
    </div>
  );
}

export default MovieList;
