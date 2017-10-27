import {Component, AfterViewInit} from '@angular/core';
import {LoadingMaskService} from './share/service/loading-mask.service';

@Component({
  selector: 'app-eye',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(private mask: LoadingMaskService) {

  }

  ngAfterViewInit() {
    this.mask.hide();
  }
}
