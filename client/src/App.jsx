import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/header" element={<Header></Header>}></Route>
        <Route path="/browser" element={<Browse></Browse>}></Route>
        <Route path="/body" element={<Body></Body>}></Route>
      </Routes>
    </BrowserRouter>

)


}

export default App