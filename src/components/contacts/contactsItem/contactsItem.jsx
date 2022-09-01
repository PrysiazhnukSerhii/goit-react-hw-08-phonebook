import { useDeletContactMutation } from '../../../redux/contactsSlise';
import { Li, Paragraph, Span, ButtonStyled } from './constactsItem.styled';
import { AiFillDelete } from 'react-icons/ai';

export function ContactsItem({ contact }) {
  const { name, number, id } = contact;

  const [updatePost, { isLoading }] = useDeletContactMutation();

  return (
    <Li>
      <Paragraph>
        <Span> {name} :</Span> {number}
      </Paragraph>
      <ButtonStyled
        onClick={async () => {
          await updatePost(id);
        }}
        disabled={isLoading}
      >
        <AiFillDelete />
      </ButtonStyled>
    </Li>
  );
}
