import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Layout from './components/common/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <Layout>
              {<Home />}
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
