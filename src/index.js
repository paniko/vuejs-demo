//import _ from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from './components/layouts/header.vue'
import App from './components/app.vue'


/*
function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
*/
/*
new Vue({
  el: '#app',
  components: { App }
})
*/
// 1. Define route components.
// These can be imported from other files
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/home',
    components: {
      default: App,
      header: Header
    }
  },
  { path: '/about',     components: {
        default: Bar,
        header: Header
      }
  }
]
Vue.use(VueRouter)

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
	linkActiveClass: "active",
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')
