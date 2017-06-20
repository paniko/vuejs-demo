<template>
  <div>
  <!-- Following Menu -->
  <div class="ui large top fixed menu transition visible" style="display: flex !important;">
    <div class="ui container">
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/home" router-link-active class="item">Home</router-link>
      <router-link to="/about"  class="item">About</router-link>
      <router-link to="/test"  class="item">Test</router-link>
      <router-link to="/about"  class="item">Company</router-link>
      <router-link to="/about"  class="item">Careers</router-link>
      <div class="right menu">
        <div class="item">
          <a class="ui button">Log in</a>
        </div>
        <div class="item">
          <a class="ui primary button">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Sidebar Menu -->
  <div class="ui vertical inverted sidebar menu">
    <router-link to="/home" router-link-active class="item">Home</router-link>
    <router-link to="/about"  class="item">About</router-link>
    <router-link to="/test"  class="item">Test</router-link>
    <router-link to="/about"  class="item">Company</router-link>
    <router-link to="/about"  class="item">Careers</router-link>
    <a class="item">Login</a>
    <a class="item">Signup</a>
  </div>
</div>
</template>
