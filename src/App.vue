<template>
  <TheNavbar></TheNavbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }}</h2>
      <button class="btn danger" @click="counterMinus">-</button>
      <button class="btn primary" @click="counterPlus">+</button>
      <button class="btn danger" @click="incrementAsync">Async +</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      counterPlus: 'increment',
      counterMinus: 'decrement'
    }),
    ...mapActions(['incrementAsync']),
  },
  computed: mapGetters(['counter', 'uppercaseTitle']),
  components: {TheNavbar}
}
</script>
