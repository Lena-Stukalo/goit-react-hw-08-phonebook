import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/navigation/Navigation';

const LayOut = () => {
  return (
    <div>
      <Navigation />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default LayOut;
