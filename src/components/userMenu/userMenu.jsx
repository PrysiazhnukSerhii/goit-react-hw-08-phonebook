import { useGetUserInformationQuery } from '../../redux/authSlice';

import { LogOut } from '../logOut/logOut';

import { FaRegAddressBook } from 'react-icons/fa';

import { Heder, Conteiner, NameStyled } from './userMenu.styled';

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
