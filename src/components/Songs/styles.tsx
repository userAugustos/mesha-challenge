import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  height: 100%;
  max-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center; 

  overflow-x: scroll;

  ul{
    padding: 1rem;
    max-height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  @media(max-width: 650px){
    padding-top: 1rem;
    width: 100%;

    overflow-x: visible;

    ul{
      height: inherit;
    }
  }
`;
