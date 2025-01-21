import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
// import DummyParams from './components/DummyParams';

function App() {
  return (
   <>
    <BrowserRouter>
      <Hero/>
      {/* <DummyParams/> */}
    </BrowserRouter>
   </>
  );
}

export default App;
