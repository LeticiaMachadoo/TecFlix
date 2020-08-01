import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path='/' component={Home} exact />
  <Route path='/cadastro/video' component={CadastroVideo} exact />
  <Route path='/cadastro/categoria' component={CadastroCategoria} exact />
  <Route  component={() => (<>Página 404</>)}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

