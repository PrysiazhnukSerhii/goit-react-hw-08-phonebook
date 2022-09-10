import { css } from '@emotion/css';

export const button = css`
  display: block;

  padding: 0;

  width: 110px;
  height: 35px;

  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);

  border-radius: 4px;
  border-style: solid;
  border-color: #2196f3;
  border-width: 3px;

  cursor: pointer;

  &:hover {
    background-color: #0d7bd1;
    color: #ffffff;
  }
`;

export const smolButton = css`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  width: 35px;
  height: 32px;

  border-radius: 4px;
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
