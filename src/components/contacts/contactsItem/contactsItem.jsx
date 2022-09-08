import { useDeletContactMutation } from '../../../redux/contactsSlise';
import {
  Li,
  Paragraph,
  Span,
  ButtonOpenUpdateForm,
  ButtonDelet,
} from './constactsItem.styled';
import { AiFillDelete } from 'react-icons/ai';
import { ImPencil } from 'react-icons/im';
import { useState } from 'react';
import { ContactsUpdateForm } from '../contactsUpdateForm/contactsUpdateForm';
import { RotatingLines } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function ContactsItem({ contact }) {
  const { name, number, id } = contact;

  const [openUpdate, setOpenUpdate] = useState(false);

  const [deletContact, { isLoading, data }] = useDeletContactMutation();

  let turnONspiner = isLoading || Boolean(data);

  console.log();
  return (
    <Li>
      {!openUpdate ? (
        <>
          {' '}
          <Paragraph>
            <Span> {name} :</Span> {number}
          </Paragraph>
          <ButtonOpenUpdateForm
            onClick={e => {
              setOpenUpdate(true);
            }}
            disabled={turnONspiner}
          >
            <ImPencil />
          </ButtonOpenUpdateForm>
          <ButtonDelet
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
          </ButtonDelet>
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
