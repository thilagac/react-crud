
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Read from './Read';
import Home from './Home';
import Update from './Update';
import Create from './Create';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/create' element={<Create/>}> </Route>
    <Route path='/update/:id' element={<Update/>}> </Route>
    <Route path='/read/:id' element={<Read/>}> </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
