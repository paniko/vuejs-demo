<template>
  <div class="ui container">
    <div class="ui secondary  menu">
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link to="/home" router-link-active class="item">Home</router-link>
        <router-link to="/about"  class="item">About</router-link>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
     test: function(){
        this.counter += 1 ;
        //or Vue.set
     },
  },
  data () {
    return {
      msg: 'Hello from vue-loader!',
      counter: 0,
    }
  }
}
</script>
