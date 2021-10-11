import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  ul{
    width: 100%;
    display: flex;

    @media(max-width: 1200px){
      flex-wrap: wrap;
    }

    padding: 1rem;
  }
`;

export const ListsSection = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;


export const InfoSection = styled.section `
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  p{
    margin: auto 10px;
    span{
      color: #68adcf;
    }
  }
`;