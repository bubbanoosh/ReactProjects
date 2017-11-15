import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import promise from 'redux-promise';


import PostsIndex from './components/posts/posts_index';
import PostsNew from './components/posts/posts_new/posts_new';
import PostsShow from './components/posts/posts_show/posts_show';
import Navigation from './components/main/navigation';
import Header from './components/main/header';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
      <div>
        <Navigation />
        <Header />
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
