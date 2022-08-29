import { useState } from 'react';
import { useSignUpUserMutation } from '../../redux/authSlice';
import { Input, Label, ButtonStyled, Container } from './register.styled';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [singUpUSer] = useSignUpUserMutation();

  const onSubmit = e => {
    e.preventDefault();

    singUpUSer({
      name,
      email,
      password,
    });
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Label>Name:</Label>
        <Input
          tape="text"
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        ></Input>
        <Label>Email:</Label>
        <Input
          tape="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        ></Input>
        <Label>Password:</Label>
        <Input
          tape="text"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        ></Input>
        <ButtonStyled type="submit">Submit </ButtonStyled>
      </form>
    </Container>
  );
}

// зробити перенаправлення на другу сторінку

// звязати лейбл з рядком
// подивитись десь повинно бути щоб на кожний інпут не ставити слухач  а на форму зразу, якось до іменні повинно підвязуватись
// ресет інпутів зробити
