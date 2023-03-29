// import PropTypes from 'prop-types';
import { List } from './Phonebook.styled';
import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { getContacts, getStatusFilter } from 'redux/constants';

export const ContactList = () => {
  const dispatch = useDispatch();


const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);


  const filterContacts = () => {
    let query = '';
    let filteredContacts = [];

    if (query !== '' && filteredContacts.length > 0) {
      query = filter.toLocaleLowerCase();
      filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );
    }
    return filteredContacts;
  };
  
  return (
    <List>
      {filterContacts().map(({ id, name, number }) => (
        
        <ContactItem
  
            id={id}
            key={id}
            name={name}
            number={number}
          onDeleteContact={() => dispatch(deleteContact(id))}
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
