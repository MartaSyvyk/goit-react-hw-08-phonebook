import { Loader } from 'components/Loader/Loader';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts, addContact } from 'redux/contacts/contacts_operations';
import { check } from 'redux/contacts/contacts_slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notiflix from 'notiflix';

export default function ContactsView() {
  const contacts = useSelector(state => state.phonebook.contacts.entities);
  const filter = useSelector(state => state.phonebook.filter);

  const error = useSelector(state => state.phonebook.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formHandler = (newName, newNumber) => {
    let isAdded = false;

    contacts.map(contact => {
      if (newName.toLowerCase() === contact.name.toLowerCase()) {
        Notiflix.Notify.failure(`${newName} is already in contacts!`);

        isAdded = true;
        return contact;
      }
      return contact;
    });
    if (isAdded !== true) {
      dispatch(addContact({ name: newName, number: newNumber }));
    }
  };

  const onChange = event => {
    dispatch(check(event.currentTarget.value));
    filterHandler();
  };

  const filterHandler = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <div>
        <h1
          style={{
            fontSize: 50,
          }}
        >
          Phonebook
        </h1>
        <Form onSubmit={formHandler} />
        <Filter filter={filter} handleChange={onChange} />
        <h2
          style={{
            fontSize: 48,
          }}
        >
          Contacts
        </h2>

        {error && <div>{error}</div>}
        {filter !== '' ? (
          <ContactList data={filterHandler()} />
        ) : (
          <ContactList data={contacts} />
        )}
      </div>
    </div>
  );
}
