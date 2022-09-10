import { useLogOutMutation } from '../../redux/authSlice';
import { Button } from './logOut.styled';

import { useSelector, useDispatch } from 'react-redux';
import { contactsApi } from '../../redux/contactsSlise';

export function LogOut() {
  const tocen = useSelector(state => state.userInformation.token);
  const [logOut] = useLogOutMutation();

  const dispatch = useDispatch();

  const onClick = async () => {
    await logOut(tocen);

    dispatch(contactsApi.util.resetApiState());
  };

  return (
    <Button type="button" onClick={onClick}>
      LogOut
    </Button>
  );
}
