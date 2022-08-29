import { LogOut } from '../logOut/logOut';
import { Heder, Conteiner, NameStyled } from './userMenu.styled';
import { useGetUserInformationQuery } from '../../redux/authSlice';

export function UserMenu() {
  const { data } = useGetUserInformationQuery();

  console.log(data);

  return (
    <>
      <Heder>Phone Book</Heder>
      <Conteiner>
        <NameStyled>user name</NameStyled>
        <LogOut />
      </Conteiner>
    </>
  );
}
