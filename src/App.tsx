import { Footer } from './components/Footer/main';
import { NavigationBar } from './components/NavigationBar/main';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
