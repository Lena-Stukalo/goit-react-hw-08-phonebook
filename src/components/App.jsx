import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeFilter, Add, Remove, FromLocal } from './redux/store';
import { nanoid } from 'nanoid';

import Form from './form/Form';
import Contacts from './contacts/Contacts';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const isFirstTime = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      dispatch(FromLocal([...localContacts]));
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
    dispatch(Add(contact));
    //setContacts(prevState => [contact, ...prevState]);
  };

  const onDeleteClick = id => {
    dispatch(Remove(id));
    //setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const onFilterChange = event => {
    dispatch(ChangeFilter(event.target.value));
    //setfilter(event.target.value);
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
