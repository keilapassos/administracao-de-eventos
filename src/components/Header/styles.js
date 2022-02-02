import styled from "styled-components";

export const Menu = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  font-size: 1.5rem;
  font-family: "Hina Mincho", serif;
`;

export const Logo = styled.div`
  width: 160px;
  height: 160px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: goldenrod;
  font-size: 1.4rem;
`;

export const MenuItem = styled.div`
  width: 150px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 6px solid transparent;

  :hover {
    cursor: pointer;
    border-bottom: 6px solid white;
  }
`;
