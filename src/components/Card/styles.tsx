import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: cnter;
  align-items: flex-start;
  flex-direction: column;

  position: relative;
  
  width: 35%;
  max-width: 300px;
  min-width: 200px;

  border-radius: 8px;

  margin: 10px 0;

  /* background: #fbfbfb; */

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  cursor: pointer;

  div{
    /* width: 100%; */
    /* height: 60%; */
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const Info = styled.section`
  padding: 1rem;

  p{
    font-variant: small-caps; //just playing, was studying fonts styles
  }

  span{
    color: #3f3f3f;
    font-size: 0.8rem;
  }
`;