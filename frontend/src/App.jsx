import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Header from './components/Header/Header';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Error from './pages/Error/Error';

function App() {

  return (
    <div className={`app-wrapper dark`}>
      <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/test" element={<Navigate to='/' />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}

export default App
