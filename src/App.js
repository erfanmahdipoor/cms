import routs from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.css'
function App() {
    let router =useRoutes(routs)
  return (
    <>
    <Topbar/>
   <div className="container">
    <Sidebar/>
    {router}
    </div>
    </>
  );
}

export default App;
