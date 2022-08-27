import { useState } from 'react';
import { useCreateContactMutation } from '../../../redux/contactsSlise';
import { ButtonStyled, Label, Input } from './createContactsFotm';

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
      <Label>Name:</Label>
      <Input tape="text" onChange={e => setName(e.target.value)}></Input>

      <Label>phone number</Label>
      <Input tape="text" onChange={e => setNumber(e.target.value)}></Input>
      <ButtonStyled type="submit">Submit </ButtonStyled>
    </form>
  );
}
