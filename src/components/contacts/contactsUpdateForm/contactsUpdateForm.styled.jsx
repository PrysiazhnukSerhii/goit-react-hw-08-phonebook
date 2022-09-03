import styled from '@emotion/styled';
import Form from 'react-bootstrap/Form';

export const Input = styled(Form.Control)``;

// переписати ці говно стилі на общі
export const FormStyled = styled.form`
  display: flex;
  height: 32px;
  padding-left: 15px;

  & :last-child {
    margin-left: 15px;
  }
`;

export const ConteinerInput = styled.div`
  // width: 230px;
`;

export const ButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  padding: 0;

  width: 32px;
  height: 32px;

  border-radius: 4px;
  color: #1dcc5a;
  background-color: rgba(0, 0, 0, 0);

  border-style: solid;
  border-color: #2196f3;
  border-width: 3px;

  cursor: pointer;

  &:hover {
    background-color: #0d7bd1;
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 3px;
  padding: 0;

  width: 32px;
  height: 32px;

  border-radius: 4px;
  color: #f25941;
  background-color: rgba(0, 0, 0, 0);

  border-style: solid;
  border-color: #2196f3;
  border-width: 3px;

  cursor: pointer;

  &:hover {
    background-color: #0d7bd1;
  }
`;
