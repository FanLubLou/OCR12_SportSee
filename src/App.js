import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import SideNavBar from "./components/sideNavBar/SideNavBar.jsx";
import TopNavBar from "./components/topNavBar/TopNavBar.jsx";
import Home from "./pages/home/Home.jsx";
import Error from "./pages/Error/Error.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import DataProvider from './services/dataProvider.jsx';

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
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
            <Route path="/user/:id/average-sessions" element={<DataProvider dataType="average-sessions" />} />
            <Route path="/user/:id/performance" element={<DataProvider dataType="performance" />} />
            <Route path="/user/:id/activity" element={<DataProvider dataType="activity" />} />
            <Route path='*' element={<Error />} />            
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
