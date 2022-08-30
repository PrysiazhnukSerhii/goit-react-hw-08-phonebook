import { ContactsItem } from '../contactsItem/contactsItem';

export function ContactsList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return <ContactsItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
