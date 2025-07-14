export default function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Crie sua conta</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nome completo" className="input" />
          <input type="email" placeholder="E-mail" className="input" />
          <input type="password" placeholder="Senha" className="input" />
          <button type="submit" className="bg-teal-600 text-white w-full py-2 rounded hover:bg-teal-700">
            Cadastrar
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Já tem conta? <a href="/login" className="text-teal-600 underline">Entrar</a>
        </p>
      </div>
    </div>
  );
}
