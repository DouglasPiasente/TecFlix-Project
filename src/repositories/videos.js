/* eslint-disable linebreak-style */
import config from '../config';

const URL_VIDEOS = `http://localhost:8080/videos`;

function create(objetoDoVideo) {
  return fetch(URL_VIDEOS), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringfy(objetoDoVideo),
  }
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os videos :(')
    });
}

export default {
  create,
};
