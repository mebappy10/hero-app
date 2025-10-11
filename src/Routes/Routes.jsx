import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import AppDetails from '../Pages/AppDetails';
import ErrorPage from '../Components/Error/ErrorPage';
import Loading from '../Components/Loading/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        hydrateFallbackElement: <p>Loading...</p>,
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/apps/:id',
        Component: AppDetails,
      },
    ],
  },
]);

export default router;
