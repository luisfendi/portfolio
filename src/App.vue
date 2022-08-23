

<template>
  <header>
    <Header/>
  </header>

  <main>
    <Promo id="first"/>
    <Promo id="second"/>
    <About id="about"/>
    <Promo id="third"/>
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Promo from './components/Promo.vue';
import About from './components/About.vue';

export default {
  data(){
    return {

    }
  },
  components:{
    Header,
    Promo,
    About
  }
}
</script>

<style scoped>


</style>
