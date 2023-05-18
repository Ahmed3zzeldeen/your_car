import './App.css';

import { Header, Footer } from './components/index.js';
import { Hero, About } from './sections/index';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
