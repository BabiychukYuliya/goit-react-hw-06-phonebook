import ContactList from './Phonebook/Phonebook';
import Form from './ContactForm/ContactForm';
import Filter from './Filter/Filter';



// const mountContacts = localStorage.getItem('contacts');
// const parseContacts = JSON.parse(mountContacts);

export const App = () => {
  // const [contacts, setContacts] = useState(parseContacts || []);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);




  return (
    <div>
      <h1>Phonebook</h1>
      <Form  />
      <h2>Contacts</h2>
      <Filter  />
      <ContactList   />
    </div>
  );
};
