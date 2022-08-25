import { useState } from 'react';

import { useSignUpUserMutation } from '../../redux/authSlice';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [singUpUSer] = useSignUpUserMutation();
  console.log(useSignUpUserMutation());
  const onSubmit = e => {
    e.preventDefault();

    singUpUSer({
      name,
      email,
      password,
    });
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

// зробити перенаправлення на другу сторінку

// звязати лейбл з рядком
// подивитись десь повинно бути щоб на кожний інпут не ставити слухач  а на форму зразу, якось до іменні повинно підвязуватись
// ресет інпутів зробити
