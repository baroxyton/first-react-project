import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
import Start from './components/Start.js';
import Edit from './components/Edit.js'
import View from './components/View.js';
function App() {
  return (
    <div className="App w-screen h-screen bg-blue-500 flex items-center justify-center">
   <Router>
   <Routes>
   <Route path="/" element={<Start/>}/>
   <Route path="/add" element={<Edit/>}/>
   <Route path="/view/:id" element={<View/>}/>
   </Routes>
   </Router>
   </div>
  );
}
export default App;
