import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {

  const [header, setHeader] = useState(false)
  const [buttonClicked, setButtonClicked] = useState("")

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {header && <Header buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>}
      </AnimatePresence>
      <AnimatedRoutes setHeader={setHeader} setButtonClicked={setButtonClicked}/>
    </div>
  );
}

export default App;
