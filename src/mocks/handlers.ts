import { rest } from 'msw';

export const handlers = [
  rest.get('/api/profissionais', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          nome: 'Dra. Júlia Fono',
          especialidade: 'Fonoaudióloga',
          imagem: 'https://via.placeholder.com/80'
        },
        {
          id: 2,
          nome: 'Dr. Rafael Psi',
          especialidade: 'Psicólogo',
          imagem: 'https://via.placeholder.com/80'
        }
      ])
    );
  })
];
