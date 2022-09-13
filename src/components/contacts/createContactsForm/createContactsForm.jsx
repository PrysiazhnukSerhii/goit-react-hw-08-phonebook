import { useState } from 'react';
import { useCreateContactMutation } from '../../../redux/contactsSlise';

import { RotatingLines } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { buttonSubmit, Header } from './createContactsForm.styled';
import { Label, Input } from '../../../components.styled/form.styled';

export function CreateContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact, { isLoading }] = useCreateContactMutation();

  const onSubmit = async e => {
    e.preventDefault();
    e.currentTarget.reset();

    if (name.length < 1 || number.length < 1) {
      return Notify.failure(`You dont written name or number`);
    }

    try {
      await createContact({ name, number });
      Notify.success(`Create new contact:"${name}"`);
    } catch (error) {
      console.log(error);
    }

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <Header>Add New Contact</Header>
      <Label>Name:</Label>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => {
          if (isLoading) {
            console.log(e);
            return;
          }
          setName(e.target.value);
        }}
        disabled={isLoading}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label>Phone number</Label>
      <Input
        type="text"
        placeholder="Phone number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        disabled={isLoading}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={buttonSubmit} disabled={isLoading}>
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
      </button>
    </form>
  );
}
