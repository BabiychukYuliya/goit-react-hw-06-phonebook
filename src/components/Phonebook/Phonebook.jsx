import PropTypes from 'prop-types';
import { List } from './Phonebook.styled';
import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getVisibleContacts } from './redux/constants';


const ContactList = ({ contacts, onDeleteContact }) => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);


  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id} />
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired
};
