import { Footer } from './components/Footer/main';
import { NavigationBar } from './components/NavigationBar/main';
import './App.css';
import { LandingPage } from './components/LandingPage/main';
function App() {
  return (
    <div>
      <NavigationBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
