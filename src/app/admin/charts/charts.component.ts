import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  // @documentation: https://www.chartjs.org/docs/latest
  // data for bar chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2016', '2017', '2018', '2019'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [100, 250, 700, 1224], label: 'Male'},
    {data: [45, 156, 599, 920], label: 'Female'}
  ];
  ////////////////////
  // data for doughnut chart
  public doughnutChartLabels = ['Incoming Q1', 'Incoming Q2', 'Incoming Q3', 'Incoming Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  // // data for radar
  // public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  // public radarChartData = [
  //   {data: [120, 130, 180, 70], label: 'Male'},
  //   {data: [90, 150, 200, 45], label: 'Female'}
  // ];
  // public radarChartType = 'radar';

  // data for pie
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  // data for line
  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  public lineChartData = [120, 133, 180, 70, 99, 200, 123, 300, 202, 155, 230, 182];
  public lineChartType = 'line';

  fromdate: Date = new Date();
  todate: Date = new Date();
  year: any;
  years = [2016, 2017, 2018, 2019, 2020, 2021, 2022];

  constructor() {
  }

  ngOnInit() {
    // TODO: insert data from here
  }


  yearChanged() {
    //  TODO: implement this
    console.log('selected year: ' + this.year);
  }
}
