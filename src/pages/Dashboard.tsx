import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Painel do Usuário</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Link to="/triagem" className="block bg-white rounded-xl shadow p-4 hover:bg-gray-100">
          🧠 Fazer Triagem
        </Link>
        <Link to="/profissionais" className="block bg-white rounded-xl shadow p-4 hover:bg-gray-100">
          👩‍⚕️ Ver Profissionais
        </Link>
      </div>
    </div>
  );
}
