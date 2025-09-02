import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProductCard name="Product A" price="999" image={logo} />
        <ProductCard name="Product B" price="1499" image={logo} />
        <ProductCard name="Product C" price="1999" image={logo} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
