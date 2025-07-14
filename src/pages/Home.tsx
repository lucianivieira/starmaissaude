import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-100 to-white text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à Star mais Saúde</h1>
      <p className="text-lg mb-6 max-w-md">
        Serviços terapêuticos e educacionais para sua saúde vocal, mental e cognitiva.
      </p>
      <Link to="/cadastro">
        <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
          Começar agora
        </button>
      </Link>
    </div>
  );
}
