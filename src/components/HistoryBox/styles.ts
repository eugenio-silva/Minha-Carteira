import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 340px;

  display: flex;
  flex-direction: column;
  
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px;

  border-radius: 7px;

  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }
`;


export const CharContainer = styled.div`
  flex: 1;
  height: 260px;
`;