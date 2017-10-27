import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ViewsComponent} from './views.component';
import {KpiIndexComponent} from '../pages/kpi-index/kpi-index.component';

const routes: Routes = [{
  path: '',
  component: ViewsComponent,
  children: [
    {
      path: 'kpiIndex',
      component: KpiIndexComponent,
    }, {
      path: 'viewingAnalyze',
      loadChildren: '../pages/viewing-analyze/viewing-analyze.module#ViewingAnalyzeModule',
    }, {
      path: 'timeFlow',
      loadChildren: '../pages/time-flow/time-flow.module#TimeFlowModule',
    }, {
      path: 'analysisData',
      loadChildren: '../pages/analysis-data/analysis-data.module#AnalysisDataModule',
    }, {
      path: 'userAnalyze',
      loadChildren: '../pages/user-analyze/user-analyze.module#UserAnalyzeModule',
    }, {
      path: '',
      redirectTo: 'kpiIndex',
      pathMatch: 'full',
    }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {
}
