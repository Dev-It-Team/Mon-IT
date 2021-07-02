export const ChartData = {
    type: "line",
    data: {
      labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
      datasets: [
        {
          label: "Nombre de commandes",
          data: [200, 175, 158, 219, 296, 430, 350],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
        {
          label: "Moyenne des prix (en €)",
          data: [14.2, 13.5, 17, 19.4, 21, 32, 26],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default ChartData;