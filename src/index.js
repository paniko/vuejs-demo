//import _ from 'lodash';
import Vue from 'vue';
import App from './app.vue'
//import VueRouter from 'vue-router';
/*
function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
*/
new Vue({
  el: '#app',
  components: { App }
})
