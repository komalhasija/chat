import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Profileupdate from './pages/ProfileUpdate/Profileupdate';
import Chat from './pages/Chat/Chat';
import Signup from './pages/Login/Signup';

// Define a Home component
function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

// Create the router
const appRouter = createBrowserRouter([
 
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/profile',
    element: <Profileupdate />,
  },
]);

// App Component
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
