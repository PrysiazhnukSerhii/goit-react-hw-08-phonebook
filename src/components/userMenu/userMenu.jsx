import { LogOut } from '../logOut/logOut';
import { Heder, Conteiner, NameStyled } from './userMenu.styled';
import { FaRegAddressBook } from 'react-icons/fa';

import { useGetUserInformationQuery } from '../../redux/authSlice';

export function UserMenu() {
  const { data } = useGetUserInformationQuery();

  if (!data) {
    return;
  }

  return (
    <>
      <Heder>
        Phone Book <FaRegAddressBook />
      </Heder>
      <Conteiner>
        <NameStyled>{data.email}</NameStyled>
        <LogOut />
      </Conteiner>
    </>
  );
}
