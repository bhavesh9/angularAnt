import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    NgxChartsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  declarations: [],
  exports: [
    NgZorroAntdModule,
    NgxChartsModule
  ]
})
export class SharedModule { }
