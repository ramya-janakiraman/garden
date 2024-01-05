import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Login from './logo';
import Register from './register';
import Footer from './Footer';
import Header from './Header';


const router = createBrowserRouter([
  {
    path: '/logo',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function Navigation(props) {

  return <div className='main-container'>
    <RouterProvider router={router} />
    <Header/>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <Footer/>
  </div>;
}

export default Navigation;