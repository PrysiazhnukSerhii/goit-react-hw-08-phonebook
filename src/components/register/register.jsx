import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useSignUpUserMutation } from '../../redux/initializationUserSlice';
import { addUserInform } from '../../redux/userSlice';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [singUpUSer, { data }] = useSignUpUserMutation();

  const datas = { user: { name: 'adsf', email: 'sdfa' }, token: '1234234' };

  const dispatch = useDispatch();
  const onSubmit = async e => {
    e.preventDefault();

    try {
      // await singUpUSer({
      //   name,
      //   email,
      //   password,
      // });
      console.log();
      dispatch(addUserInform(datas));
    } catch {}
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input tape="text" onChange={e => setName(e.target.value)}></input>
      <label>Email:</label>
      <input tape="text" onChange={e => setEmail(e.target.value)}></input>
      <label>Password:</label>
      <input tape="text" onChange={e => setPassword(e.target.value)}></input>
      <button type="submit">Submit </button>
    </form>
  );
}

// звязати лейбл з рядком
// подивитись десь повинно бути щоб на кожний інпут не ставити слухач  а на форму зразу, якось до іменні повинно підвязуватись
