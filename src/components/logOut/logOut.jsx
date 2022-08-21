import { Button } from './logOut.styled';
import { useLogOutMutation } from '../../redux/authSlice';
import { useSelector } from 'react-redux';

export function LogOut() {
  const tocen = useSelector(state => state.userInfom.token);
  const [logOut] = useLogOutMutation();
  const onClick = () => {
    console.log(tocen);
    logOut(tocen);
  };

  return (
    <Button type="button" onClick={onClick}>
      LogOut
    </Button>
  );
}

// не розлогінює пише треба залогінитись дічь якась
