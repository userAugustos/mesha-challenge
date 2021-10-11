import styled from "styled-components";

export const Container = styled.div`
  max-height: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  section {
    h3 {
      margin: 10px auto;
    }
  }
`;

export const Save = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  margin-top: 15px;

  h4 {
    color: #868181;
  }
  div {
    max-width: 4rem !important;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1em;
  }

`;

export const StyledButton = styled.button`
  padding: 1.3em 4em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 0 5px;

  &:hover {
    background-color: ${props => props.color};
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  &:active {
    transform: translateY(-1px);
  }
`;
