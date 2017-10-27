import {Directive, Input, AfterViewInit, HostBinding, HostListener, Attribute} from '@angular/core';

@Directive({
  selector: '[appTreeView]'
})
export class TreeViewDirective implements AfterViewInit {

  @Input() appTreeView: string;

  @HostBinding()
  get innerHTML() {
    return this.appTreeView
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    this.appTreeView = 'a';
    console.dir(event);
  }

  constructor(@Attribute('nz-menu') public author: string) {
    console.dir(author)

  }

  ngAfterViewInit() {

  }
}
