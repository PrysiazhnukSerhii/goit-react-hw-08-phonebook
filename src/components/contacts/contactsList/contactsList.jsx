import { useGetContactsQuery } from '../../../redux/contactsSlise';
import { ContactsItem } from '../contactsItem/contactsItem';

export function ContactsList() {
  const { data } = useGetContactsQuery();
  // debugger;

  // console.log(eee);
  console.log(data);

  if (!data) {
    return;
  }
  return (
    <ul>
      {data.map(contact => {
        return <ContactsItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
