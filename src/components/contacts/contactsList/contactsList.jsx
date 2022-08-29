import { useGetContactsQuery } from '../../../redux/contactsSlise';
import { ContactsItem } from '../contactsItem/contactsItem';

export function ContactsList() {
  const data = useGetContactsQuery();

  if (!data.data) {
    return;
  }
  return (
    <ul>
      {data.data.map(contact => {
        return <ContactsItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
