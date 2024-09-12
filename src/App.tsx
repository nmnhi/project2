import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Home, Profile } from './pages';

function App() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/profile', element: <Profile /> },
  ];
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
