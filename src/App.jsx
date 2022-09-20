import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LayOut from 'components/layOut/LayOut';
import Home from 'components/Home/Home';
import Phonebook from 'components/contacts/PhoneBook';
import Login from 'components/logIn/LogIn';
import Register from 'components/register/Register';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="contacts" element={<Phonebook />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};
