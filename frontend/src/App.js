import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Insert from './components/Insert';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact  path="/" element={<Login />} />
          
          <Route path="/home" element={<HeaderFooterLayout><Home /></HeaderFooterLayout>} />
          <Route path="/insert" element={<HeaderFooterLayout><Insert /></HeaderFooterLayout>} />
        </Routes>
      </Router>
    </div>
  );
}

// HeaderFooterLayout component to wrap Home component with header and footer
const HeaderFooterLayout = ({ children }) => (
  <>
    <Header />
    <Sidebar />
    {children}
    <Footer />
  </>
);

export default App;
