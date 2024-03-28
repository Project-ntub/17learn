const toggleMenu = () => {
    document.body.classList.toggle("open");
}

const barChartContext = document.getElementById('monthlySalesBarChart').getContext('2d');
const monthlySalesBarChart = new Chart(barChartContext, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Monthly Sales',
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 10000)),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


document.addEventListener('DOMContentLoaded', function () {
  // Generate random data for the pie chart
  function getRandomData() {
    return [0, 1, 2, 3, 4].map(() => Math.floor(Math.random() * 100) + 1);
  }

  const data = {
    labels: ['Electronics', 'Clothing', 'Home & Garden', 'Health & Beauty', 'Toys & Games'],
    datasets: [{
      label: 'Category Sales',
      data: getRandomData(),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  };

  new Chart(document.getElementById('categoryPieChart'), config);
});


const lineChartContext = document.getElementById('customerVisitsLineChart').getContext('2d');
const customerVisitsLineChart = new Chart(lineChartContext, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [{
      label: 'Customer Visits',
      data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 1000)),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
