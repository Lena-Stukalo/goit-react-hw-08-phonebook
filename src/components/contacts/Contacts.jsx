import PropTypes from 'prop-types';
import Filter from 'components/filter/Filter';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Contacts = ({ contacts, filter, onFilterChange, onDeleteClick }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={onFilterChange}></Filter>
      <ListGroup>
        {contacts.map(contact => {
          return (
            <ListGroup.Item
              as="li"
              variant="info"
              className="d-flex justify-content-between align-items-start"
              key={contact.id}
            >
              <p>
                {contact.name} {contact.number}
              </p>
              <Button
                variant="danger"
                type="button"
                onClick={() => {
                  onDeleteClick(contact.id);
                }}
              >
                Delete
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
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
