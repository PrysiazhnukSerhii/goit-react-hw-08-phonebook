import { useDeletContactMutation } from '../../../redux/contactsSlise';

export function ContactsItem({ contact }) {
  const { name, number, id } = contact;

  const [updatePost, { isLoading }] = useDeletContactMutation();

  return (
    <li>
      <p>
        {name} : {number}{' '}
      </p>
      <button
        onClick={async () => {
          await updatePost(id);
        }}
        disabled={isLoading}
      >
        delete
      </button>
    </li>
  );
}
