import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function Cadastrocategory() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const [category, setCategory] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(chave, valor) {
    // chave: title, description, bla, bli
    setValues({
      ...values,
      [chave]: valor, // title: 'valor'
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
        ? 'http://localhost:8080/categories'
        : 'https://tecflix-project.herokuapp.com/categories';
      fetch(URL)
        .then(async (response) => {
          console.log('response: ', response);
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
        Cadastro de category:
        {values.title}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategory([
          ...category,
          values,
        ]);

        setValues(initialValues);
      }}
      >

        <FormField
          label="Nome da category"
          type="text"
          name="title"
          value={values.title}
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
        {/* eslint-disable-next-line react/button-has-type */}
        <button>Cadastrar</button>
      </form>

      <ul>
        {category.map((cat) => (
          <li key={cat.id}>
          {console.log('cat: ', cat)}
            {cat.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default Cadastrocategory;