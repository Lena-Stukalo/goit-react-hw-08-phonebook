import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operation from './redux/auth/authOperations.js';
import LayOut from 'components/layOut/LayOut';
import Home from 'components/Home/Home';
import Login from 'components/logIn/LogIn';
import Register from 'components/register/Register';
import PrivatRoute from 'components/PrivatRoute.jsx';
import PublicRoute from 'components/PublicRoute.jsx';
import css from './App.module.css'

const Phonebook = lazy(() => import('./components/contacts/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.currentUser());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<PrivatRoute />}>
            <Route path="contacts" element={<Phonebook />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
