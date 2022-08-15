import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import Form from './form/Form';
import Contacts from './contacts/Contacts';
export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setfilter] = useState('');
  const isFirstTime = useRef(true);

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      setContacts([...localContacts]);
    }
  }, []);

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkName = name => {
    return contacts.find(contact => contact.name === name);
  };

  const onHendlerSubmit = (name, number) => {
    if (checkName(name)) {
      window.alert(`${name} is alredy exist`);
      return;
    }
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    setContacts(prevState => [contact, ...prevState]);
  };

  const onDeleteClick = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const onFilterChange = event => {
    setfilter(event.target.value);
  };
  const calculateContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = calculateContacts();
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={onHendlerSubmit} />
      <Contacts
        contacts={visibleContacts}
        filter={filter}
        onFilterChange={onFilterChange}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
}
