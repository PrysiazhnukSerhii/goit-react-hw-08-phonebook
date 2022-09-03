import { CreateContactsForm } from './createContactsForm/createContactsForm';
import { ContactsList } from './contactsList/contactsList';
import { Filter } from './filter/filter';
import {
  Container,
  ContainerForm,
  Box,
  ContainerContact,
  HeaderName,
  Paragraph,
} from './contacts.styled';
import { useState } from 'react';
import { useGetContactsQuery } from '../../redux/contactsSlise';

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
        ) : (
          <Paragraph>You don't have contacts, create new contact</Paragraph>
        )}
      </ContainerContact>
    </Container>
  );
}

// feremi2@gmail.com
// 123454321
