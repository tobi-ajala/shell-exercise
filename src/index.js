import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './index.css';
import ReactHighcharts from 'react-highcharts';
var Highcharts = require('highcharts'); // Load Highcharts
require('highcharts/modules/funnel')(Highcharts); // Load a module
//import App from './App'; // Not used
//import registerServiceWorker from './registerServiceWorker'; // Not used
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

const config = {
  chart: {
    renderTo: 'root',
    type: 'pie',
    width: 700, // Width of entire highcharts embed
    panning: true, // Zooming ability for mibile devices
    events: {
      load: function(event) {
        var chart = this,
          points = chart.series[0].points,
          len = points.length,
          total = 0,
          i = 0;
        for (i = 0; i < len; i++) {
          total += points[i].y;
        }
        chart.setTitle({
          text: '<br>€' + total,
          verticalAlign: 'middle',
          style: {
            fontFamily: 'Arial,Roboto,Helvetica,sans-serif',
            fontWeight: 'bold',
            fontSize: 34
          },
        });
        // Adding 'transaction' label - labels below don't support images/icons
        this.renderer.label("<div class='transactions' style=''><img style='width:25px; height:25px; position:relative; top:7px;' src='https://github.com/tobi-ajala/shell-exercise/blob/master/icons/card.png?raw=true'/> &nbsp; Transactions</div>", 150, 130, null, null, null, true).add(); //120, 130
        // Adding date label
        this.renderer.label("<div class='date'>11 Sept 2017 - 11 Oct 2017</div>", 130, 225, null, null, null, true).add();
        // Adding time period label (static)
        this.renderer.label("<div class='time' style='font-weight:bold;'>TIME PERIOD</div>", 480, 20, null, null, null, true).add();
        // Adding days label (static)
        this.renderer.label("<div class='last' style='border-bottom:1px solid #DCDCDC; padding-bottom:5px;'>last 30 days &nbsp;<img style='width:10px; height:10px; position:relative; ' src='https://github.com/tobi-ajala/shell-exercise/blob/master/icons/arrow.png?raw=true'/></div>", 590, 20, null, null, null, true).add();
      }
    }
  },
  credits: {
    enabled: false // Remove highcharts.com credits
  },
  colors: ['#FAD331', '#96D5DF', '#1BA8BB', '#C5D930', '#C1A0C5'], // Changing pie section colours
  title: {
    x: -135 // Positioning total title towards the left
  },
  tooltip: {
    formatter: function() {
      return '<b>' + this.point.name + '</b>: €' + this.y;
    }
  },
  legend: {
    enabled: true,
    floating: false,
    borderWidth: 0,
    align: 'right', // Moving the legend to the right of the donut chart
    layout: 'vertical', // Display in columns
    verticalAlign: 'middle',
    itemMarginTop: 5, // Space between each category in the legend
    itemMarginBottom: 5,
    itemStyle: {
      lineHeight: "40px" // Aligning icons and text
    },
    useHTML: true,
    labelFormatter: function() { // Includes cat & price in legend
      return '<span style="display:block; margin-top:-10px; position:relative; width:220px;border-bottom:1px solid #DCDCDC;"><image style="width:20px; height:20px;" src="' + this.icon + '" />&nbsp<span style="font-weight:normal; vertical-align:super;">' + this.name + ' </span><span style="font-weight:normal; vertical-align:super; position:absolute; right:0px;">€' + this.y + '<br/></span></span>'; // right:0px; pulls the number to the right and keeps the text to the left
    }
  },
  plotOptions: {
    pie: {
      shadow: false
    }
  },
  series: [{
    name: 'Transactions',
    data: [{
      name: 'Fuel',
      y: 7450.00,
      icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/fuel.png?raw=true'
    }, {
      name: 'Lubricants',
      y: 435.00,
      icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/lubricants.png?raw=true'
    }, {
      name: 'Road Services',
      y: 200.87,
      icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/road.png?raw=true'
    }, {
      name: 'Food',
      y: 45.67,
      icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/forkknife.png?raw=true'
    }, {
      name: 'Shop',
      y: 42.45,
      icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }],
    size: '80%', // Size of the donut
    innerSize: '85%',
    showInLegend: true,
    dataLabels: {
      enabled: false
    }
  }],
};

ReactDOM.render(
  <div>
  <Header/>
  <ReactHighcharts config = {config}></ReactHighcharts></div>, document.getElementById('root'));
