import { LogOut } from '../logOut/logOut';
import { Heder, Conteiner, NameStyled } from './userMenu.styled';
import { FaRegAddressBook } from 'react-icons/fa';

export function UserMenu({ userInformation }) {
  const { email } = userInformation;
  console.log(email);
  return (
    <>
      <Heder>
        Phone Book <FaRegAddressBook />
      </Heder>
      <Conteiner>
        <NameStyled>{email}</NameStyled>
        <LogOut />
      </Conteiner>
    </>
  );
}
