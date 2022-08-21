import { Button } from './logOut.styled';
import { useLogOutMutation } from '../../redux/authSlice';
import { useSelector } from 'react-redux';

export function LogOut() {
  const tocen = useSelector(state => state.userInfom.token);
  const onClick = () => {
    console.log(tocen);
  };

  return (
    <Button type="button" onClick={onClick}>
      LogOut
    </Button>
  );
}
