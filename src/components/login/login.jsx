import { useState } from 'react';
import { useLoginMutation } from '../../redux/authSlice';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Email:</label>
      <input tape="text" onChange={e => setEmail(e.target.value)}></input>

      <label>Password:</label>
      <input tape="text" onChange={e => setPassword(e.target.value)}></input>

      <button type="submit">Enter</button>
    </form>
  );
}
