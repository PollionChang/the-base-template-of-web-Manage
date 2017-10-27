import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewsComponent} from './views.component';
import {ViewsRoutingModule} from './views-routing.module';
import {KpiIndexComponent} from '../pages/kpi-index/kpi-index.component';
import {NzLayoutModule} from 'ng-zorro-antd';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    NgZorroAntdModule,
    ViewsRoutingModule,
    NzLayoutModule],
  declarations: [ViewsComponent, KpiIndexComponent]
})
export class ViewsModule {

}
