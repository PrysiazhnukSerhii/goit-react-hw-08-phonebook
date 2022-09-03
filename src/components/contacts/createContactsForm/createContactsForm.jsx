import { useState } from 'react';
import { useCreateContactMutation } from '../../../redux/contactsSlise';
import {
  ButtonStyled,
  Label,
  Input,
  Header,
} from './createContactsForm.styled';
import { RotatingLines } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function CreateContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact, { isLoading }] = useCreateContactMutation();

  const onSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();

    if (name.length < 1 || number.length < 1) {
      return Notify.failure(`You dont written name or number`);
    }

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
        value={name}
        onChange={e => setName(e.target.value)}
      ></Input>

      <Label>Phone number</Label>
      <Input
        tape="text"
        placeholder="Phone number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      ></Input>
      <ButtonStyled type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <RotatingLines
              strokeColor="#1cdb0b"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />{' '}
            Saves
          </>
        ) : (
          'Add contact'
        )}
      </ButtonStyled>
    </form>
  );
}
