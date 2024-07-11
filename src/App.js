
import './App.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Feature from './pages/Feature';
import About from './pages/About';
import Price from './pages/Price';
import Clients from './pages/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero/>
        <Feature/>
        <About />
        <Price/>
        <Clients />
        <Footer />
    </div>
  );
}

export default App;
