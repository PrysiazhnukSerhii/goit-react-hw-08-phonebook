import { useState } from 'react';
import { useUpdateContactMutation } from '../../../redux/contactsSlise';

import { RotatingLines } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BsFillCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

import {
  FormStyled,
  buttonClose,
  buttonSave,
} from './contactsUpdateForm.styled';

import { Input } from '../../../components.styled/form.styled';

export function ContactsUpdateForm({
  openUpdate,
  currentName,
  currentNumber,
  id,
}) {
  const [name, setName] = useState(currentName);
  const [number, setNumber] = useState(currentNumber);

  const [updateContact, { isLoading }] = useUpdateContactMutation();

  let contact = { name, number };

  const onSubmit = async e => {
    e.preventDefault();

    updateContact({ id, contact }).then(e => {
      openUpdate(false);
      Notify.success(`Update contact:"${name}"`);
    });
  };

  return (
    <>
      <FormStyled onSubmit={onSubmit} id="update">
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={isLoading}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <Input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
          disabled={isLoading}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormStyled>

      <button
        type="submit"
        form="update"
        className={buttonSave}
        disabled={isLoading}
      >
        {isLoading ? (
          <RotatingLines
            strokeColor="#1cdb0b"
            strokeWidth="5"
            animationDuration="0.75"
            width="20"
            visible={true}
          />
        ) : (
          <BsFillCheckCircleFill />
        )}
      </button>
      <button
        className={buttonClose}
        onClick={() => {
          openUpdate(false);
        }}
        disabled={isLoading}
      >
        <BsXCircleFill />
      </button>
    </>
  );
}
