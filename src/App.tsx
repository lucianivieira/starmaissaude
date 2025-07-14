import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Triagem from './pages/Triagem';
import Profissionais from './pages/Profissionais';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/triagem" element={<Triagem />} />
        <Route path="/profissionais" element={<Profissionais />} />
      </Routes>
    </Router>
  );
}

export default App;
