import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {

  const [header, setHeader] = useState(false)

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {header && <Header/>}
      </AnimatePresence>
      <AnimatedRoutes setHeader={setHeader}/>
    </div>
  );
}

export default App;
