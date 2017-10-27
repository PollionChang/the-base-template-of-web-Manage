import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UserAnalyzeViewComponent} from './user-analyze-view/user-analyze-view.component';

const routes: Routes = [
  {
    path: '',
    component: UserAnalyzeViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserAnalyzeViewComponent]
})

export class UserAnalyzeModule {
}
