import { useState } from 'react';
import {
  FormStyled,
  ButtonSave,
  ButtonClose,
  Input,
  ConteinerInput,
} from './contactsUpdateForm.styled';
import { useUpdateContactMutation } from '../../../redux/contactsSlise';
import { BsFillCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

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

  return (
    <>
      <FormStyled>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </FormStyled>
      <ButtonSave
        onClick={() => {
          openUpdate(false);
          updateContact({ id, contact });
        }}
      >
        <BsFillCheckCircleFill />
      </ButtonSave>
      <ButtonClose
        onClick={() => {
          openUpdate(false);
        }}
      >
        <BsXCircleFill />
      </ButtonClose>
    </>
  );
}
