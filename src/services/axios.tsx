import axios from 'axios';

const config = {
    headers: {
        'Authorization': 'Bearer ' + ''
    }
}

const API = 'https://graphql.datocms.com/';

export async function getAll() {
    const queryResult = await axios.post(
        API, {
        query: `{
            allPlanos {
              id
              titulo
              valor
              brisaMusic
              brisaPlay
              instalacao
              promocao
              roteador
              telefoneFixo
              telefoneFixoIlimitado
            }
          }`
    },
        config
    );

    return queryResult.data.data.allPlanos;
}

export async function getAllByEstado(estado: string) {
    const queryResult = await axios.post(
        API, {
        query: `{
            allPlanos(filter: {estado: {matches: {pattern: ${estado}}}}) {
              id
              titulo
              valor
              brisaMusic
              brisaPlay
              instalacao
              promocao
              roteador
              telefoneFixo
              telefoneFixoIlimitado
            }
          }`
    },
        config
    );

    return queryResult.data.data.allPlanos;
}