import './App.css';



import { Header, Hero, About, Services, Cars, Contact, Testimonials, Sponsors, Footer } from './sections/index';
import ShoppingCartProvider from "./contexts/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Hero />
      <About />
      <Services />
      <Cars />
      <Contact />
      <Testimonials />
      <Sponsors />
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
