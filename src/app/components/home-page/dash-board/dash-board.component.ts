import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {
  projects = [
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      avatar: 'https://i.pravatar.cc/40?img=1',
      project: 'Flexy React',
      status: 'bg-danger',
      weeks: 35,
      budget: '95K'
    },
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      avatar: 'https://i.pravatar.cc/40?img=2',
      project: 'Landing pro React',
      status: 'bg-primary',
      weeks: 35,
      budget: '95K'
    },
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      avatar: 'https://i.pravatar.cc/40?img=3',
      project: 'Elite React',
      status: 'bg-warning',
      weeks: 35,
      budget: '95K'
    },
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      avatar: 'https://i.pravatar.cc/40?img=4',
      project: 'Ample React',
      status: 'bg-success',
      weeks: 35,
      budget: '95K'
    }
  ];
 // Data for the chart
 public lineChartData: ChartData<'line'> = {
  labels: [  'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      data: [120, 150, 180, 210, 250, 280, 300, 350, 400, 450, 500, 600],
      label: 'Sales',
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    }
  ]
};

public lineChartOptions: ChartOptions = {
  responsive: true,
};

public lineChartType: 'line' = 'line';
}
