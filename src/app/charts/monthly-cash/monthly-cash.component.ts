import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-monthly-cash',
  templateUrl: './monthly-cash.component.html',
  styleUrls: ['./monthly-cash.component.scss']
})
export class MonthlyCashComponent implements OnInit {
  @ViewChild('chart', { static: false }) chart: UIChart;

  barData = {
    labels: [
      'Jan 2019',
      'Feb 2019',
      'Mar 2019',
      'Apr 2019',
      'May 2019',
      'Jun 2019',
      'Aug 2019',
      'Sep 2019',
      'Oct 2019',
      'Nov 2019',
      'Dec 2019'
    ],
    datasets: [
      {
        label: 'First Dataset',
        data: [18, 17, 19, 19, 17, 18, 16, 17, 17, 18, 16, 17, 15],
        backgroundColor: [
          '#4F33FF',
          '#6E33FF',
          '#A833FF',
          '#4F33FF',
          '#6E33FF',
          '#A833FF',
          '#4F33FF',
          '#6E33FF',
          '#A833FF',
          '#4F33FF',
          '#6E33FF',
          '#A833FF'
        ]
      }
    ]
  };
  barOptions = {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };
  copy: {
    labels: string[];
    datasets: { label: string; data: number[]; backgroundColor: string[] }[];
  };
  constructor(private service: DataService) {}

  ngOnInit() {
    // const observableB = this.service.wsSubject().multiplex(
    //   // And the same goes for 'B'.
    //   () => ({ charts: 'charts' }),
    //   () => ({ charts: 'charts' }),
    //   message => message.type === 'charts'
    // );
    // observableB.subscribe(msg => {
    //   console.log('charts');
    //   this.copy = this.barData;
    //   this.copy.datasets[0].data = msg.data;
    //   this.barData = { ...this.copy };
    // });
  }
}
