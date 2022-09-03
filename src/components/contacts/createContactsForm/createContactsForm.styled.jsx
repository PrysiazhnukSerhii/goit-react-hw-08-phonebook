import styled from '@emotion/styled';
import Form from 'react-bootstrap/Form';

export const Input = styled(Form.Control)``;

export const Label = styled(Form.Label)`
  color: white;
  font-weight: 600;
`;

export const Header = styled.h2`
  color: white;
  font-weight: 500;
  font-size: 23px;
`;

export const ButtonStyled = styled.button`
  display: block;

  margin-left: auto;
  margin-top: 6px;
  padding: 0;

  width: 110px;
  height: 35px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.87;
  border-radius: 4px;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);

  border-style: solid;
  border-color: #2196f3;
  border-width: 3px;

  cursor: pointer;

  &:hover {
    background-color: #0d7bd1;
  }
`;