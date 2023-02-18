import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  min-height: 100vh;
`;

export const Titulo = styled.p`
  gap: 150px;
  display: block;
  height: 72px;
  margin-left: 40px;
  margin-top: 70px;
  margin-bottom: 70px;
  font-size: 48px;
  color: white;
  font-weight: 700;
  line-height: 38, 73px;
`;
export const TituloPokedex = styled.p`
  display: block;
  height: 100rem;
  margin-left: 40px;
  margin-bottom: 70px;
  font-size: 48px;
  color: white;
  font-weight: 700;
  line-height: 38, 73px;;
`;
