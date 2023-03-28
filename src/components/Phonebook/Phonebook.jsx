// import PropTypes from 'prop-types';
import { List } from './Phonebook.styled';
import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from '../../redux/constants';
import { deleteContact } from '../../redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getContacts);

  // Фільтрує та повертає результат фільтру

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );
    return filteredContacts;
  };

  return (
    <List>
      {filterContacts().map(contact => (
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
