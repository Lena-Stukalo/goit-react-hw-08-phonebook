import { useSelector, useDispatch } from 'react-redux';
import { ChangeFilter } from './redux/store';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} from './redux/contactAPI';

import Form from './form/Form';
import Contacts from './contacts/Contacts';

export default function App() {
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
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
      name: name,
      number: number,
    };
    createContact(contact);
  };

  const onFilterChange = event => {
    dispatch(ChangeFilter(event.target.value));
  };
  const calculateContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  let visibleContacts = [];

  if (!isFetching) {
    visibleContacts = calculateContacts();
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={onHendlerSubmit} />
      <Contacts
        contacts={visibleContacts}
        filter={filter}
        onFilterChange={onFilterChange}
        onDeleteClick={deleteContact}
      />
    </div>
  );
}
