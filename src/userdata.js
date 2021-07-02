  export const SignInChartData = {
    type: "bar",
    data: {
      labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
      datasets: [
        {
          label: "Nombre de nouvaux comptes",
          data: [50, 42, 37, 56, 71, 103, 30],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
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
  
export default SignInChartData;