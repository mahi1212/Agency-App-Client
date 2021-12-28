import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <div className='bg-yellow-300 text-gray-600 py-4'>
        Copyright © Mahinur Rahman 2021
      </div>
    </div>
  );
}

export default App;
