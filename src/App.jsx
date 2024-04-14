import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import PNF from "./pages/404/PNF"
import Header from "./compo/header/Header"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<PNF />} />
      </Routes>
    </>
  )
}

export default App
