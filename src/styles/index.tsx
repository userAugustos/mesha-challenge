import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.section`
  width: 50%;
  height: 100%;
  max-width: 950px;
  /* min-width: 650px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 650px){
    padding-top: 1rem;
    width: 100%;
    height: 20rem;
  }

  h2{
    margin-top: 4rem;
  }

  img{
    width: 35rem;
  }

  div, section{
    transition: all 0.5s ease-out;
  }
`;