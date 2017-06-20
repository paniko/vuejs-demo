<template>
  <div class="ui container">
    <div class="message" >{{ msg }}</div>
    <div class="">{{counter}}</div>
    <div>
      <input type="text" name="" v-model="msg">
    </div>
    <a @click="test" class="ui primary button">Click here</a>
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

<style>
.message {
  color: blue;
}
</style>