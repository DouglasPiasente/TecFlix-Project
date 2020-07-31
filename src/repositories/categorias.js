/* eslint-disable linebreak-style */
import config from '../config/';

const URL_CATEGORIES = `http://localhost:8080/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIES)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(')
    });
}

export default {
  getAllWithVideos,
};
