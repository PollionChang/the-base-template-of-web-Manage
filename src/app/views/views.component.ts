import {Component, ChangeDetectionStrategy} from '@angular/core';
import {HY_NAV_OPTIONS} from './views-menu';

@Component({
  selector: 'app-ngx-pages',
  templateUrl: './view.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent {
  menu = HY_NAV_OPTIONS;
  isCollapsed = false;
  path = '../../assets/img/logo.png';

  constructor() {
  }

}
