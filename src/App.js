import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Common/Navbar';
import Contents from './Components/Contents/Contents';
import Home from './Components/Home/Home';
import Journals from './Components/Journals/Journals';
import PostAJournal from './Components/PostAJournal/PostAJournal';
import Login from './Components/Registration/Login';
import SignUp from './Components/Registration/SignUp';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contents' element={<Contents />} />
        <Route path='journals' element={<Journals />} />
        <Route path='postJournal' element={<PostAJournal />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
