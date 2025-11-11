
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from "./pages/Login.jsx"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/login2/"} element={<Login/>} ></Route>

    </Routes>
    
    </BrowserRouter>
      
      
    </>
  )
}

export default App
