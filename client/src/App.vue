<template>
  <div id="app">
    <Header />

    <main>
      <div class="container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div> 
    </main>  
     
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('style/style.css');
</style>
