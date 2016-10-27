import React, { Component } from 'react';
export class GooglePie extends Component {
  componentDidMount(){
    this.drawCharts();
  }
  componentDidUpdate(){
    this.drawCharts();
  }
  /*global someFunction google:true*/
  /*
  ESLint to take google as global varible
  */
  drawCharts(){
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
  render(){
    return (
      <div id="Pie">
      </div>
    )
  }
}
