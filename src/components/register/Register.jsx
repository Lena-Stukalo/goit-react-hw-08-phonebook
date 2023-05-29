import RegisterForm from 'components/form/RegisterForm';
import css from './Register.module.css'
const Register = () => {
  return (
    <div className={css.page}>
      <h1 className={css.title}>Register</h1>
      <RegisterForm />
    </div>
  );
};
export default Register;
