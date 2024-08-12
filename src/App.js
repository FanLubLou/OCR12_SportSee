import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import SideNavBar from "./components/sideNavBar/SideNavBar.jsx";
import TopNavBar from "./components/topNavBar/TopNavBar.jsx";
import Home from "./pages/home/Home.jsx";
import Error from "./pages/Error/Error.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <TopNavBar/>
      <main>
        <SideNavBar />
        <div className="contentContainer">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:id' element={<Dashboard />} />            
            <Route path='*' element={<Error />} />            
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
