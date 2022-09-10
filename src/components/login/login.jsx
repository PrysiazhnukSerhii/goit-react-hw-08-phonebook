import { useState } from 'react';
import { useLoginMutation } from '../../redux/authSlice';

import { Container, loginButton } from './login.styled';
import { Input, Label } from '../../components.styled/form.styled';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password }).then(e => {
      if (e.error) {
        return alert(`This user:${email} was not found `);
      }
    });
  };

  return (
    <Container onSubmit={onSubmit}>
      <form>
        <Label>Email:</Label>
        <Input
          onChange={e => setEmail(e.target.value)}
          tape="email"
          placeholder="Email"
          required
        ></Input>

        <Label>Password:</Label>
        <Input
          onChange={e => setPassword(e.target.value)}
          tape="password"
          placeholder="Password"
          required
        ></Input>

        <button type="submit" className={loginButton}>
          Enter
        </button>
      </form>
    </Container>
  );
}
