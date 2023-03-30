import { Contact } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <Contact>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Contact>
  );
};

export default ContactItem;
