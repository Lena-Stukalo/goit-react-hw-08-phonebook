import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/navigation/Navigation';
import css from './LayOut.module.css'

const LayOut = () => {
  return (
    <div>
      <Navigation />
      <div className={css.container}>
      <Suspense>
        <Outlet />
      </Suspense>
      </div>
    </div>
  );
};
export default LayOut;
