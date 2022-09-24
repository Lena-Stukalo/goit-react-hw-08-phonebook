import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="">
          <span>Find Contact</span>
          <Form.Control type="text" value={filter} onChange={onFilterChange} />
        </Form.Label>
      </Form.Group>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
export default Filter;
