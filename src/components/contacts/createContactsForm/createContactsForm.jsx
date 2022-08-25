import { useState } from 'react';
import { useCreateContactMutation } from '../../../redux/contactsSlise';

export function CreateContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact] = useCreateContactMutation();
  console.log(useCreateContactMutation());
  const onSubmit = e => {
    e.preventDefault();
    createContact({ name, number });
    console.log(name, number);
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
