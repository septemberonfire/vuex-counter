<template>
  <header class="navbar">
    Vuex Counter {{ counter }}
    <button class="btn" @click="addFive">+5</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['counter'])
    },
    methods: {
      ...mapMutations(['add']),
      addFive() {
        this.add({value : 5})
      }
    }
  }
</script>
