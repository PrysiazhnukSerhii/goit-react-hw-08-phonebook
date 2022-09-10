import { useSelector, useDispatch } from 'react-redux';
import { useLogOutMutation } from '../../redux/authSlice';
import { contactsApi } from '../../redux/contactsSlise';

import { buttonLogOut } from './logOut.styled';

export function LogOut() {
  const tocen = useSelector(state => state.userInformation.token);
  const [logOut] = useLogOutMutation();

  const dispatch = useDispatch();

  const onClick = async () => {
    await logOut(tocen);

    dispatch(contactsApi.util.resetApiState());
  };

  return (
    <button type="button" className={buttonLogOut} onClick={onClick}>
      LogOut
    </button>
  );
}
