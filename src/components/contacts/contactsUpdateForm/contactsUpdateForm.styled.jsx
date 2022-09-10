import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { smolButton } from '../../../components.styled/button.styled';

export const FormStyled = styled.form`
  display: flex;
  height: 32px;
  padding-left: 15px;

  & :last-child {
    margin-left: 15px;
  }
`;

export const buttonSave = css`
  ${smolButton}
  margin-left: auto;
  width: 32px;

  color: #1dcc5a;
`;

export const buttonClose = css`
  ${smolButton}

  margin-left: 3px;
  width: 32px;

  color: #f25941;
`;
