import { useState } from 'react';
import { useCreateContactMutation } from '../../../redux/contactsSlise';
import {
  ButtonStyled,
  Label,
  Input,
  Header,
} from './createContactsForm.styled';

export function CreateContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact] = useCreateContactMutation();

  const onSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
    createContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <Header>Add New Contact</Header>
      <Label>Name:</Label>
      <Input
        tape="text"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      ></Input>

      <Label>Phone number</Label>
      <Input
        tape="text"
        placeholder="Phone number"
        onChange={e => setNumber(e.target.value)}
      ></Input>
      <ButtonStyled type="submit">Submit </ButtonStyled>
    </form>
  );
}
