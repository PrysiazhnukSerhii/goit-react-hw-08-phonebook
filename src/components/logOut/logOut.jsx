import { Button } from './logOut.styled';
import { useLogOutMutation } from '../../redux/authSlice';

import { useSelector, useDispatch } from 'react-redux';
import { authApi } from '../../redux/authSlice';
import { contactsApi } from '../../redux/contactsSlise';

export function LogOut() {
  const tocen = useSelector(state => state.userInformation.token);
  const [logOut] = useLogOutMutation();

  const dispatch = useDispatch();

  const onClick = async () => {
    await logOut(tocen);

    // console.log(authApi.util);
    // dispatch(authApi.util.resetApiState());
    dispatch(contactsApi.util.resetApiState());
  };

  return (
    <Button type="button" onClick={onClick}>
      LogOut
    </Button>
  );
}

// не розлогінює пише треба залогінитись дічь якась
