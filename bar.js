const ctx = document.getElementById('contributionsChart').getContext('2d');
const contributionsChart = new Chart(ctx, {
    type: 'bar', // Can be 'line', 'pie', 'doughnut', etc.
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Total Contributions',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0], // Replace with actual data
            backgroundColor: ['red', 'blue', 'green', 'orange', 'lightblue', 'purple', 'snow', 'grey'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
