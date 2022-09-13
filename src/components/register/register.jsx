import { useState } from 'react';
import { useSignUpUserMutation } from '../../redux/authSlice';

import { buttonSubmit, Container } from './register.styled';
import { Input, Label } from '../../components.styled/form.styled';

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
    }).then(e => {
      if (e.error) {
        return alert(
          'Maybe this e-mail address or name exists. Enter a different email address or name'
        );
      }
    });
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Label>Name:</Label>
        <Input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <Label>Email:</Label>
        <Input
          type="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          pattern="[A-Za-z0-9]+@[a-z]+\.[a-z]+"
          title="Email format is incorrect. Example: name@mail.com"
          required
        />
        <Label>Password:</Label>
        <Input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          pattern="(?=.*\d)(?=.*[A-Za-z]).{5,}"
          title="Must contain at least one number, one letter and at least 5 or more characters"
          required
        />
        <button type="submit" className={buttonSubmit}>
          Submit{' '}
        </button>
      </form>
    </Container>
  );
}
