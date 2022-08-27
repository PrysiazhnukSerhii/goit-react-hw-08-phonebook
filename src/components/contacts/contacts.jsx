import { CreateContactsForm } from './createContactsForm/createContactsForm';
import { ContactsList } from './contactsList/contactsList';

export function Contacts() {
  return (
    <div>
      <h2>contacts</h2>
      <CreateContactsForm />

      <ContactsList />
    </div>
  );
}
