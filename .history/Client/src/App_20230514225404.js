import './Styles/App.css'
import MainContainer from './Components/Layout/MainContainer';
import Login from './Components/Auth/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='inbox' element={<MainContainer />} />
      </Routes>
    </div>
  );
}

export default App;
