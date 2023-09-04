let ctx = document.querySelector("#myChart");
  new Chart(ctx, {
    type: "pie", // tarte - camembert
    data: {
      labels : ["Production de vin en %", "Production de tire-bouchons personnalisés en %", "Production de fromage en %"],
      datasets : [{
        label : " ",
        data : [60, 10, 30],
        backgroundColor : ["red", "orange", "blue"]
      }]
    },
    options : {
      hoverOffset : 50,
      title : {
        display : true, 
      },
      legend : {
        position : "bottom"
      }
    }
  })