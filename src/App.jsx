import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App;