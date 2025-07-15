import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Triagem from './pages/Triagem';
import Profissionais from './pages/Profissionais';
import Dashboard from './pages/Dashboard';

const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/triagem" element={<Triagem />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
