import { useEffect, useState } from 'react';

type Profissional = {
  id: number;
  nome: string;
  especialidade: string;
  imagem: string;
};

export default function Profissionais() {
  const [dados, setDados] = useState<Profissional[]>([]);

  useEffect(() => {
    fetch('/api/profissionais')
      .then((res) => res.json())
      .then(setDados)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Profissionais disponíveis</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {dados.map((pro) => (
          <div key={pro.id} className="flex items-center gap-4 p-4 border rounded-lg shadow">
            <img src={pro.imagem} alt={pro.nome} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h3 className="font-bold">{pro.nome}</h3>
              <p className="text-sm text-gray-600">{pro.especialidade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
