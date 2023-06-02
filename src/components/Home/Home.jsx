import css from './Home.module.css';
const Home = () => {
  return (
    <div>
      <h1 className={css.title}>Wellcome to Phone Book App</h1>
      <p className={css.text}>Store your contacts with us</p>
    </div>
  );
};
export default Home;
