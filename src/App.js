import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {

  const [header, setHeader] = useState(false)
  const [footer, setFooter] = useState(false)
  const [buttonClicked, setButtonClicked] = useState("")

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {header && <Header buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>}
      </AnimatePresence>
      <div id='page-container'>
        <AnimatedRoutes setHeader={setHeader} setFooter={setFooter} setButtonClicked={setButtonClicked}/>
        {footer && <Footer/>}
      </div>
    </div>
  );
}

export default App;
