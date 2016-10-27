import React, { Component } from 'react';
export class GooglePie extends Component {

  componentDidMount(){
    let google = null
    console.log(google,"before timeout")
  setTimeout( () => {
    console.log(google,"timeout")
    console.log(google.charts,document.getElementById('Pie'))
     google.charts.load('current', {'packages':['corechart']});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {

         var data = google.visualization.arrayToDataTable([
           ['Task', 'Hours per Day'],
           ['Work',     11],
           ['Eat',      2],
           ['Commute',  2],
           ['Watch TV', 2],
           ['Sleep',    7]
         ]);

         var options = {
           title: 'My Daily Activities'
         };

         var chart = new google.visualization.PieChart(document.getElementById('Pie'));

         chart.draw(data, options);
       }
  },3000)
  }
  render(){
    return (
      <div id="Pie">
      </div>
    )
  }
}
