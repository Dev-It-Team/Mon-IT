<template>
  <div>
    <canvas id="chart"></canvas>
    <canvas id='chart2'></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import ChartData from '../data.js'
import UserChartData from '../userdata.js'

export default {
  name: 'Chart',
  data() {
    return {
      ChartData: ChartData,
      UserChartData: UserChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('chart');
    new Chart(ctx, this.ChartData);
    const ctxx = document.getElementById('chart2');
    new Chart(ctxx, this.UserChartData);
  }
}
</script>