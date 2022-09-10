import { useState } from 'react';
import { useDeletContactMutation } from '../../../redux/contactsSlise';

import { ContactsUpdateForm } from '../contactsUpdateForm/contactsUpdateForm';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { RotatingLines } from 'react-loader-spinner';
import { AiFillDelete } from 'react-icons/ai';
import { ImPencil } from 'react-icons/im';

import {
  Li,
  Paragraph,
  Span,
  buttonOpenUpdateForm,
  buttonDelet,
} from './constactsItem.styled';

export function ContactsItem({ contact }) {
  const { name, number, id } = contact;

  const [openUpdate, setOpenUpdate] = useState(false);

  const [deletContact, { isLoading, data }] = useDeletContactMutation();

  let turnONspiner = isLoading || Boolean(data);

  return (
    <Li>
      {!openUpdate ? (
        <>
          {' '}
          <Paragraph>
            <Span> {name} :</Span> {number}
          </Paragraph>
          <button
            onClick={e => {
              setOpenUpdate(true);
            }}
            className={buttonOpenUpdateForm}
            disabled={turnONspiner}
          >
            <ImPencil />
          </button>
          <button
            className={buttonDelet}
            onClick={async () => {
              await deletContact(id);
              Notify.failure(`Deleted contact: ${name}`);
            }}
            disabled={turnONspiner}
          >
            {turnONspiner ? (
              <RotatingLines
                strokeColor="#1cdb0b"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={true}
              />
            ) : (
              <AiFillDelete />
            )}
          </button>
        </>
      ) : (
        <ContactsUpdateForm
          openUpdate={setOpenUpdate}
          currentName={name}
          currentNumber={number}
          id={id}
        />
      )}
    </Li>
  );
}
