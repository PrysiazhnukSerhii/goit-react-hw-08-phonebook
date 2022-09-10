import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { smolButton } from '../../../components.styled/button.styled';

export const Li = styled.li`
  display: flex;

  margin-bottom: 4px;

  font-weight: 400;
  font-size: 18px;
  color: white;
`;

export const Paragraph = styled.p`
  display: flex;

  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

export const Span = styled.span`
  width: 230px;
`;

export const ContainerContact = styled.div`
  width: 100%;
  padding-left: 18px;
`;

export const buttonOpenUpdateForm = css`
  ${smolButton};

  margin-left: auto;
`;

export const buttonDelet = css`
  ${smolButton};

  margin-left: 3px;
`;
