import LoginForm from 'components/form/LoginForm';
import css from './Login.module.css'

const Login = () => {
  return (
    <div className={css.page}>
      <h1 className={css.title}>Login</h1>
      <LoginForm />
    </div>
  );
};
export default Login;
