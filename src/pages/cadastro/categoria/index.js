import React, { useState } from 'react';
import PageDefault from '../../../componentes/components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste'])
    
    const valoresIniciais = {
        nome: 'nome inicial',
        descricao: 'desc inicial',
        cor: '#000',
    }

    const [values, setValues] = useState(valoresIniciais)

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function handleChange(evento) {
        setValue(evento.target.getAttribute('name'), evento.target.value)
        // setNomeDaCategoria(evento.target.value);
    }
    
    return (
        <>
            <PageDefault>
                <h1>Cadastro de Categoria: {values.nome} </h1>
                <form onSubmit={function handleSubmit(evento) {
                    evento.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ]);

                }}>
                    <div>
                        <label>
                            Nome da Categoria: 
                            <input
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange}
                            />
                        </label>
                    </div>    
                    
                    <div>
                        <label>
                            Descrição: 
                            <textarea
                                type="text"
                                name="descricao"
                                value={values.descricao}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Cor: 
                            <input
                                type="color"
                                name="cor"
                                value={values.cor}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <button>
                        Cadastrar
                     </button>
                </form>

                <ul>
                    {categorias.map((categoria, index) => {
                        return (
                            <li key={`${categoria} ${index}`}>
                                {categoria}
                            </li>
                        )
                    })}
                </ul>



                <Link to="/">
                    Ir para a Home
            </Link>
            </PageDefault>
        </>
    )
}

export default CadastroCategoria;