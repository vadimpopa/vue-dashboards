<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'hello',
    computed: mapState({chartOptions: state => state.chart.chartOptions}),
    beforeMount () {
      // this.$store.dispatch('GET_CHART_OPTIONS')
      this.$store.dispatch('GET_CHART', 'cj2brfisl2rje01530qxhwzh6')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
