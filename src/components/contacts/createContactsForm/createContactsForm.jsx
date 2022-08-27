import { useState } from 'react';
import { useCreateContactMutation } from '../../../redux/contactsSlise';
import { useGetContactsQuery } from '../../../redux/contactsSlise';

export function CreateContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // let { data } = useGetContactsQuery();

  // console.log(data);
  const [createContact] = useCreateContactMutation();

  const onSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
    createContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input tape="text" onChange={e => setName(e.target.value)}></input>

      <label>phone number</label>
      <input tape="text" onChange={e => setNumber(e.target.value)}></input>
      <button type="submit">Submit </button>
    </form>
  );
}
