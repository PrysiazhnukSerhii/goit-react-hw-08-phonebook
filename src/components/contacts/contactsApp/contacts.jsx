import { useState } from 'react';
import { useGetContactsQuery } from '../../../redux/contactsSlise';

import { CreateContactsForm } from '../createContactsForm/createContactsForm';
import { ContactsList } from '../contactsList/contactsList';
import { Filter } from '../filter/filter';

import {
  Container,
  ContainerForm,
  Box,
  ContainerContact,
  HeaderName,
  Paragraph,
} from './contacts.styled';

export function Contacts() {
  const [serchName, setSerchName] = useState('');
  const { data } = useGetContactsQuery();

  let contacts = data;

  if (!data) {
    return;
  }

  if (serchName.length > 0) {
    contacts = data.filter(information =>
      information.name.toLowerCase().includes(serchName.toLowerCase())
    );
  }

  return (
    <Container>
      <ContainerForm>
        <Filter serchName={setSerchName} />
        <CreateContactsForm />
      </ContainerForm>
      <ContainerContact>
        <Box>
          <HeaderName>Name</HeaderName>
          <p>Number</p>
        </Box>
        {contacts.length > 0 ? (
          <ContactsList contacts={contacts} />
        ) : serchName.length === 0 ? (
          <Paragraph>You don't have contacts, create new contact</Paragraph>
        ) : (
          <Paragraph> Don't found contact with this name</Paragraph>
        )}
      </ContainerContact>
    </Container>
  );
}
