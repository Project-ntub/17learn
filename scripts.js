// Toggle Menu Visibility
const toggleMenu = () => {
  document.body.classList.toggle("open");
};

// Chart Management
const chartsData = [];
let chartsInstances = [];

// Renders all charts from chartsData
const renderCharts = () => {
  const container = document.querySelector('.dashboard');
  container.innerHTML = '';
  chartsData.forEach((chartConfig, index) => {
    const chartContainer = document.createElement('div');
    chartContainer.className = 'bg-white p-4 shadow rounded-lg m-4';
    const canvas = document.createElement('canvas');
    canvas.id = `chart-${index}`;
    chartContainer.appendChild(canvas);
    container.appendChild(chartContainer);
    
    const chartInstance = new Chart(canvas, chartConfig);
    chartsInstances[index] = chartInstance; // Update or add the new chart instance
  });
};

// Generates random data for charts
const getRandomData = (count, multiplier) => 
  Array.from({ length: count }, () => Math.floor(Math.random() * multiplier));

// Creates chart configuration based on title and type
const createChartConfig = (title, type) => {
  const data = getRandomData(5, 100); // Simplified to remove duplicate code
  let backgroundColors, borderColors;
  
  switch (type) {
    case 'line':
    case 'bar':
      backgroundColors = 'rgba(54, 162, 235, 0.2)';
      borderColors = 'rgba(54, 162, 235, 1)';
      break;
    case 'pie':
    case 'doughnut':
      const colors = [
        ['rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)'],
        ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)'],
        ['rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 1)'],
        ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)'],
        ['rgba(153, 102, 255, 0.2)', 'rgba(153, 102, 255, 1)']
      ];
      backgroundColors = colors.map(color => color[0]);
      borderColors = colors.map(color => color[1]);
      break;
  }

  return {
    type,
    data: {
      labels: ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5'],
      datasets: [{
        label: title,
        data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }]
    },
    options: {
      scales: type === 'bar' ? { y: { beginAtZero: true } } : {}
    }
  };
};

// Create a new chart
const createChart = (title, type) => {
  const newChartConfig = createChartConfig(title, type);
  chartsData.push(newChartConfig);
  renderCharts();
};

// Delete a specific chart
const deleteChart = (title) => {
  const chartIndex = chartsData.findIndex(chart => chart.data.datasets[0].label === title);
  if (chartIndex > -1) {
    chartsInstances[chartIndex]?.destroy();
    chartsData.splice(chartIndex, 1);
    chartsInstances.splice(chartIndex, 1);
    renderCharts();
  }
};

// Demo Initialization
createChart('Initial Bar Chart', 'bar');
createChart('Initial Line Chart', 'line');
createChart('Initial Pie Chart', 'pie');
