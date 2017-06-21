<template>
  <div class="ui large secondary inverted pointing menu">
    <a class="toc item">
      <i class="sidebar icon"></i>
    </a>
    <router-link to="/home" router-link-active class="item">Home</router-link>
    <router-link to="/about"  class="item">About</router-link>
    <router-link to="/test"  class="item">Test</router-link>
    <router-link to="/about"  class="item">Company</router-link>
    <router-link to="/about"  class="item">Careers</router-link>
    <div class="right item">
      <a class="ui inverted button">Log in</a>
      <a class="ui inverted button">Sign Up</a>
    </div>
  </div>
</template>
