import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import ElemntBookmark from './Component/ElemntBookmark/ElemntBookmark';

function App() {
  return (
    <div className="container text-center">
      <nav className="my-3">
        <Navbar/>
      </nav>
      <header  className=" mt-5">
        <Home/>
      </header>
      <section className='my-5 pb-3'>
        <ElemntBookmark/>
      </section>
    </div>
  );
}

export default App;
