import { useState } from 'react';

const perguntas = [
  "Com que frequência você tem dificuldades para se comunicar?",
  "Você sente cansaço vocal frequente?",
  "Costuma esquecer palavras ou informações?"
];

export default function Triagem() {
  const [indice, setIndice] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-xl font-medium mb-6">Triagem Inicial</h2>
        <p className="mb-4">{perguntas[indice]}</p>
        <div className="flex flex-col gap-3">
          {["Nunca", "Às vezes", "Frequentemente"].map((resposta) => (
            <button
              key={resposta}
              className="bg-teal-100 hover:bg-teal-200 text-teal-900 px-4 py-2 rounded-lg"
              onClick={() => setIndice((prev) => Math.min(prev + 1, perguntas.length - 1))}
            >
              {resposta}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
