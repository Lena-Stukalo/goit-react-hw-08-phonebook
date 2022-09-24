import { useState } from 'react';

import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} from '../../redux/contacts/contactAPI';

import ContactForm from 'components/form/Form';
import Contacts from './Contacts';

export default function Phonebook() {
  const [filter, setFilter] = useState('');
  const { data, isFetching } = useGetAllContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [createContact] = useCreateContactMutation();

  const checkName = name => {
    return data.find(contact => contact.name === name);
  };

  const onHendlerSubmit = (name, number) => {
    if (checkName(name)) {
      window.alert(`${name} is alredy exist`);
      return;
    }
    const contact = {
      name,
      number,
    };
    createContact(contact);
  };

  const onFilterChange = event => {
    setFilter(event.target.value);
  };
  const calculateContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    if (data) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      );
    }
  };

  let visibleContacts = [];

  if (!isFetching && data) {
    visibleContacts = calculateContacts();
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onHendlerSubmit} />
      <Contacts
        contacts={visibleContacts}
        filter={filter}
        onFilterChange={onFilterChange}
        onDeleteClick={deleteContact}
      />
    </div>
  );
}
