import styled from "styled-components";

export const Titulo = styled.p`
  gap: 150px;
  display: block;
  width: auto;
  height: 72px;
  margin-left: 40px;
  margin-top: 70px;
  margin-bottom: 70px;
  font-size: 48px;
  color: white;
  font-weight: 700;
  line-height: 38, 73px;
`;
export const AllPokemons = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  background-color: #5e5e5e;
  min-height: 100vh;
`;
