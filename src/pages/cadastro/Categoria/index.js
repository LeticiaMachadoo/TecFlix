import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    categoryName: '',
    description: '',
    color: '',
  };

  const [category, setCategory] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(chave, valor) {
    // chave: categoryName, description, bla, bli
    setValues({
      ...values,
      [chave]: valor, // categoryName: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://tecflix-project.herokuapp.com/categorias';
      fetch(URL)
        .then(async (response) => {
          if (response.ok) {
            const resp = await response.json();
            setCategory(resp);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.categoryName}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategory([
          ...category,
          values
        ]);

        setValues(initialValues)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="categoryName"
          value={values.categoryName}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <button> Cadastrar  </button>
      </form>


      <ul>
        {category.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.categoryName}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;