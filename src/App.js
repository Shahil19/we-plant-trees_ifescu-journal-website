import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Common/Navbar';
import Contents from './Components/Contents/Contents';
import Home from './Components/Home/Home';
import Journals from './Components/Journals/Journals';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contents' element={<Contents />} />
        <Route path='journals' element={<Journals />} />
      </Routes>
    </>
  );
}

export default App;
