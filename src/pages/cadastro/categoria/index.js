import React, { useState } from 'react';
import PageDefault from '../../../componentes/components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../componentes/components/FormFields';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([])
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

                    setValues(valoresIniciais)
                }}>

                    <FormField
                        label="Nome da Categoria: "
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                    />


                    <FormField
                        label="Descrição: "
                        type="???"
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
                        label="Cor: "
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

                    <button>
                        Cadastrar
                     </button>
                </form>

                <ul>
                    {categorias.map((categoria, index) => {
                        return (
                            <li key={`${categoria} ${index}`}>
                                {categoria.nome}
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