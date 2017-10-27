import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {path: 'views', loadChildren: 'app/views/views.module#ViewsModule'},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'views', pathMatch: 'full'},
  {path: '**', redirectTo: 'views'},
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
