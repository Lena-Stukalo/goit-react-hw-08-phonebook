import PropTypes from 'prop-types';
import Filter from 'components/filter/Filter';
import css from './Contacts.module.css';

const Contacts = ({ contacts, filter, onFilterChange, onDeleteClick }) => {
  return (
    <div>
      <h2 className={css.title}>Contacts</h2>
      <Filter filter={filter} onFilterChange={onFilterChange}></Filter>
      <ul>
        {contacts.map(contact => {
          return (
            <li variant="info" className={css.item} key={contact.id}>
              <p className={css.contact}>
                <span className={css.name}>{contact.name}:</span>
                <span>{contact.number}</span>
              </p>
              <button
                className={css.button}
                variant="danger"
                type="button"
                onClick={() => {
                  onDeleteClick(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
export default Contacts;
