import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { useState } from 'react';

function App() {

  const [header, setHeader] = useState(false)

  return (
    <div className="App">
      <Header header={header}/>
      <AnimatedRoutes setHeader={setHeader}/>
    </div>
  );
}

export default App;
