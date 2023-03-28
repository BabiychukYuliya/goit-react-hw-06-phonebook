// import PropTypes from 'prop-types';
import { List } from './Phonebook.styled';
import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from '../../redux/constants';
import { deleteContact } from '../../redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const filterContacts = () => {
    if (filter === '') {
      return false;
    }
      
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  const filtered = filterContacts();

  const list = filtered ? filtered : contacts;
  return (
    <List>
      {list.map(contact => (
        <ContactItem
          id={contact.id}
          contact={contact}
          onDeleteContact={() => dispatch(deleteContact(contact))}
          key={contact.id}
        />
      ))}
    </List>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   onDeleteContact: PropTypes.func,
// };
