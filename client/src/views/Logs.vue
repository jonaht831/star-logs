<template>
  <div class="log container-fluid">
    <div class="row">
      <div class="col">
        <h1>Ships Log</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <logs></logs>
      </div>
    </div>
  </div>
</template>

<script>
  import Logs from '@/components/Logs.vue'
  export default {
    name: 'log',
    mounted() {
      this.$store.dispatch('showLogs')
    },
    data() {
      return {

      }
    },
    computed: {
      logs() {
        return this.$store.state.logs
      }
    },
    methods: {
    },
    components: {
      Logs
    }
  }

</script>

<style>


</style>