import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className={css.wraper}>
      <form className="mb-3">
        <label htmlFor="" className={css.inputWraper}>
          <span className={css.text}>Find Contact</span>
          <input className={css.input} type="text" value={filter} onChange={onFilterChange} />
        </label>
      </form>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
export default Filter;
