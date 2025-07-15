import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'teste@teste.com' && senha === 'teste') {
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } else {
      alert('Credenciais inválidas. Use teste@teste.com / teste');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleLogin}>
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input mb-3"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input mb-4"
        />
        <button className="bg-teal-600 text-white w-full py-2 rounded hover:bg-teal-700" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
