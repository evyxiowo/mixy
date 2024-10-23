import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages';
import { loader as landingLoader } from './pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2><HomeLayout/></h2>,
    errorElement: <Error/>,
    children: [
      {
        index:true,
        element: <h2><Landing/></h2>,
        errorElement: <SinglePageError/>,
        loader: landingLoader,
      },
      {
        path: 'error',
        element: <h2><Error/></h2>,
      },
      {
        path: 'newsletter',
        element: <h2><Newsletter/></h2>,
      },
      {
        path: 'cocktail',
        element: <h2><Cocktail/></h2>,
      },
      {
        path: 'about',
        element: <h2><About/></h2>,
      },
    ]
  },
  
]);

const App = () => {
  return <RouterProvider router={router}/>
}
    
export default App;
