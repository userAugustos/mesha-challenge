import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    section{
      display: flex;
      flex-direction: column;
    }

    input{
      padding: 1rem;
      border: none;
      border-bottom: groove 1px #000;
      outline: none;
      margin: 10px auto;
    }

    button{
      border: none;
      padding: 1.2em 3em;
      border-radius: 8px;
      cursor: pointer;
      background-color: #e52e56;

      color: #fff;
      font-weight: 600;
    }
`;  
