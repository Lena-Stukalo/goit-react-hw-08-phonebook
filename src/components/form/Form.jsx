import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import css from './Form.module.css'

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = event => {
    const { name } = event.target;
    switch (name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };
  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitForm} className={css.form}>
      <div className={css.inputWraper}>
        <label>
          <span className={css.text}>Name:</span>
          <input
          className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputChange}
          />
        </label>
      </div>
      <div className={css.inputWraper}>
        <label>
          <span  className={css.text}>Tel:</span>
          <input
           className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputChange}
          />
        </label>
      </div>
      <button className={css.button} type="submit">Add contact</button>
    </form>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func,
};
export default ContactForm;
