import styled from "styled-components";

export const StyledAllProducts = styled.div`
  h1 {
    width: 100%;
    font-size: 2.5rem;
    margin: 20px;
    text-align: center;
    font-family: "Hina Mincho", serif;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px auto;
  max-width: 1400px;

  h2 {
    font-family: "Hina Mincho", serif;
    text-align: center;
  }

  p {
    margin: 0 20px;
    font-family: "Work Sans", sans-serif;
    text-align: center;
  }

  span {
    font-weight: bold;
    font-family: "Work Sans", sans-serif;
  }

  h3 {
    font-size: 1.5rem;
    font-family: "Work Sans", sans-serif;
  }
`;

export const StyledEachProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 400px;
  border: 4px solid rgb(61, 35, 35);
  margin: 10px auto;
  padding: 10px;
`;

export const StyledButtonPlace = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  margin: 20px;
  font-weight: bold;
  font-size: 1.2rem;

  button {
    width: 200px;
    margin: 5px;
    height: 30px;
    border: 2px solid black;
    background-color: goldenrod;
    font-weight: bold;
    font-family: "Work Sans", sans-serif;

    :hover {
      width: 220px;
      background-color: black;
      color: goldenrod;
      cursor: pointer;
      transition: width 1s;
    }
  }
`;

export const StyledButtonToRemove = styled.button`
  width: 200px;
  margin: 20px;
  height: 30px;
  border: 2px solid black;
  background-color: goldenrod;
  font-weight: bold;
  font-family: "Work Sans", sans-serif;

  :hover {
    cursor: pointer;
    background-color: black;
    color: goldenrod;
  }
`;
