import { useEffect, useContext } from 'react'; // Import useEffect and useContext
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import IndexPage from './pages/Index';
import HomePage from './pages/HomeApp';
import CreatePartyConfig from './pages/CreatePartyConfig'
import CreatePartyResume from './pages/CreatePartyResume'
import { AuthProvider, AuthContext } from './components/AuthContext'; // Import AuthContext

function AppRoutes() {
  const { setCurrentUser } = useContext(AuthContext); // Get setCurrentUser from context

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
    }
  }, []); // Empty dependency array means this useEffect runs once on mount

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<IndexPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/createparty/config" element={<CreatePartyConfig/>} />
          <Route path="/createparty/resume" element={<CreatePartyResume/>} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
