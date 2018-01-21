import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import pt_BR from './pt_BR';
import VeeValidate, { Validator } from 'vee-validate';

import { routes } from './routes';
import './directives/Transform';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './assets/css/teste.css';
import './assets/js/teste.js';

Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

Vue.use(VueResource);

Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

Vue.http.interceptors.push((req, next) => {

  // é possível colocar informações no header antes do envio da requisição
  //req.headers.set('Authorization', 'informação de segurança aqui');
  console.log('Lidando com o request');

  next(res => {
    console.log('Lidando com a resposta')
    // é possível acessar os dados da reposta e realizar transformações antes
    console.log(res.body);
  });

});

Validator.localize('pt_BR', pt_BR);
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})

