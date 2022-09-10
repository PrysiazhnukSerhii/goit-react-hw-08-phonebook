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

    if (name.length === 0 || email.length === 0 || password.length === 0) {
      return alert('You did not fill in all fields');
    }

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
      console.log(e.error);
    });

    // if (isError) {
    //   return alert();
    // }
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
          pattern="[A-Za-z0-9]+@[a-z]+\.[a-z]+"
          title="Email format is incorrect. Example: name@mail.com"
        ></Input>
        <Label>Password:</Label>
        <Input
          tape="text"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          pattern="(?=.*\d)(?=.*[A-Za-z]).{5,}"
          title="Must contain at least one number, one letter and at least 5 or more characters"
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
