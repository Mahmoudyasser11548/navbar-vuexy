import ThemeNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeNavbar />
      </BrowserRouter>
    </>
  );
}

export default App;
