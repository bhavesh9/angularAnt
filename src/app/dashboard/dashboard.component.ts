import { Component, OnInit, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { single } from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

@NgModule({
  imports: [
      SharedModule
  ]
  
})
// export class DashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class DashboardComponent {
  single: any[];
  multi: any[];

  view: any[];// = [700, 400]

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  showGridLines = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }
}
