/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../componentes/components/FormFields';
import Button from '../../../componentes/components/ButtonLink/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'video padrao',
    url: 'https://www.https://www.youtube.com/watch?v=Lf3ZV0UsnEo.com',
    categoria: 'Front-End',
  });

  return (
    <>
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          alert('Vídeo cadastrado com sucesso!');

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaID: 1
          })
          .then(() => {
            history.push('/');

          })

        }}
        >
          <FormField
            label="Título do Vídeo "
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />
          <FormField
            label="URL do Vídeo "
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />
          <FormField
            label="Categoria do Vídeo "
            type="text"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
          />
          <Button>
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroVideo;
