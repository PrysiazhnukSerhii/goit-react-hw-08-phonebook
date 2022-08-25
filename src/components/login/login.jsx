import { useState } from 'react';
import { useLoginMutation } from '../../redux/authSlice';
import { Container, Input, Label, ButtonStyled } from './login.styled';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Container onSubmit={onSubmit}>
      <form>
        <Label>Email:</Label>
        <Input
          onChange={e => setEmail(e.target.value)}
          tape="email"
          placeholder="Enter email"
        ></Input>

        <Label>Password:</Label>
        <Input
          onChange={e => setPassword(e.target.value)}
          tape="password"
          placeholder="Password"
        ></Input>

        <ButtonStyled type="submit">Enter</ButtonStyled>
      </form>
      <p>ferem@gmail.com</p>
      <p>26012010</p>
    </Container>
  );
}
