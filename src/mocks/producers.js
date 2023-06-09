import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

import aspargos from '../assets/verduras/Aspargos.png';
import tomate from '../assets/verduras/Tomate.png';
import brocolis from '../assets/verduras/Brócolis.png';
import batata from '../assets/verduras/Batata.png';
import pepino from '../assets/verduras/Pepino.png';
import abobora from '../assets/verduras/Abóbora.png';
import cenoura from '../assets/verduras/Cenouras.png';
import cenoura2 from '../assets/verduras/Cenouras2.png';
import verduras from '../assets/verduras/Verduras.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  list: [
    {
      name: 'Green',
      image: green,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      baskets: [
        {
          details: {
            name: 'Brócolis e Pepino',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: pepino,
          },
          items: [
            {
              name: 'Brócolis',
              image: brocolis,
            },
            {
              name: 'Pepino',
              image: pepino,
            },
          ],
        },
        {
          details: {
            name: 'Brócolis',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: brocolis,
          },
          items: [
            {
              name: 'Brócolis',
              image: brocolis,
            },
          ],
        },
      ],
    },
    {
      name: 'Salad',
      image: salad,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      baskets: [
        {
          details: {
            name: 'Salada completa',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: verduras,
          },
          items: [
            {
              name: 'Tomate',
              image: tomate,
            },
            {
              name: 'Brócolis',
              image: brocolis,
            },
            {
              name: 'Pepino',
              image: pepino,
            },
          ],
        },
        {
          details: {
            name: 'Tomate e pepino',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: tomate,
          },
          items: [
            {
              name: 'Tomate',
              image: tomate,
            },
            {
              name: 'Pepino',
              image: pepino,
            },
          ],
        },
      ],
    },
    {
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      baskets: [
        {
          details: {
            name: 'Muita Batata',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: batata,
          },
          items: [
            {
              name: 'Batata',
              image: batata,
            },
          ],
        },
        {
          details: {
            name: 'Tomate e Brócolis',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: brocolis,
          },
          items: [
            {
              name: 'Tomate',
              image: tomate,
            },
            {
              name: 'Brócolis',
              image: brocolis,
            },
          ],
        },
      ],
    },
    {
      name: 'Grow',
      image: grow,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      baskets: [
        {
          details: {
            name: 'Abobora e Aspargos',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: aspargos,
          },
          items: [
            {
              name: 'Abóbora',
              image: abobora,
            },
            {
              name: 'Aspargos',
              image: aspargos,
            },
          ],
        },
        {
          details: {
            name: 'Tomate e Abobora',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: abobora,
          },
          items: [
            {
              name: 'Tomate',
              image: tomate,
            },
            {
              name: 'Abóbora',
              image: abobora,
            },
          ],
        },
      ],
    },
    {
      name: 'Potager',
      image: potager,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      baskets: [
        {
          details: {
            name: 'Pepinos',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: pepino,
          },
          items: [
            {
              name: 'Pepino',
              image: pepino,
            },
          ],
        },
        {
          details: {
            name: 'Brócolis, Aspargos e Cenoura',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: cenoura2,
          },
          items: [
            {
              name: 'Brócolis',
              image: brocolis,
            },
            {
              name: 'Aspargos',
              image: aspargos,
            },
            {
              name: 'Cenoura',
              image: cenoura,
            },
          ],
        },
      ],
    },
  ],
};

export default produtores;
