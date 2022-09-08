import styled from '@emotion/styled';

export const Li = styled.li`
  display: flex;

  margin-bottom: 4px;

  font-weight: 400;
  font-size: 18px;
  color: white;
`;

export const Paragraph = styled.p`
  display: flex;
  // justify-content: space-between;

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

export const ButtonOpenUpdateForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;

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

export const ButtonDelet = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 3px;

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
