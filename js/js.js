google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Fertilizantes',     80],
        ['Insecticidas',      65],
        ['Fungicidas',  45],
        ['Fitorreguladores', 20],
        ['Otros',    10]
    ]);

    var options = {
        title: 'Productos Agroquímicos vendidos - 2021 by Type'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}