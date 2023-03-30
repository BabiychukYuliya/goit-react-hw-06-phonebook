import ContactList from './Phonebook/Phonebook';
import Form from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
