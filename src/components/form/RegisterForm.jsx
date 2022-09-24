import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from '../../redux/auth/authOperations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onInputChange = event => {
    const { name } = event.target;
    switch (name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'name':
        setName(event.target.value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <Form onSubmit={hendleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>
          <span>Name:</span>
          <Form.Control
            type="text"
            name="name"
            required
            value={name}
            onChange={onInputChange}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          <span>Email:</span>
          <Form.Control
            type="email"
            name="email"
            required
            value={email}
            onChange={onInputChange}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          <span>Password:</span>
          <Form.Control
            type="password"
            name="password"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={password}
            onChange={onInputChange}
          />
        </Form.Label>
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
