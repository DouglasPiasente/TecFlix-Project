/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/components/PageDefault';
import FormField from '../../../componentes/components/FormFields';
import Button from '../../../componentes/components/ButtonLink/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(evento) {
    setValue(evento.target.getAttribute('name'), evento.target.value);
    // setNomeDaCategoria(evento.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, [

  ]);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>
        <form onSubmit={function handleSubmit(evento) {
          evento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          setValues(valoresIniciais);
        }}
        >

          <FormField
            label="Nome da Categoria "
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição "
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
          {/* <div>
                        <label>
                            Descrição:
                            <textarea
                                type="text"
                                name="descricao"
                                value={values.descricao}
                                onChange={handleChange}
                            />
                        </label>
                    </div> */}

          <FormField
            label="Cor "
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          {/* <div>
                        <label>
                            Cor:
                            <input
                                type="color"
                                name="cor"
                                value={values.cor}
                                onChange={handleChange}
                            />
                        </label>
                    </div> */}

          <Button>
            Cadastrar
          </Button>
        </form>

        {categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para a Home
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
