import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class LoadingMaskService {
  private _selector: string = 'nb-global-spinner';
  private _loadingSelector: string = 'hy-loading';
  private loaders: Promise<any>[] = [];
  private _element: HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
  }

  public show(): void {
    this._element.style['display'] = 'block';
  }

  public hide(delay: number = 0): void {
    setTimeout(() => {
      this._element.style['display'] = 'none';
    }, delay);
  }

  registerLoader(method: Promise<any>): void {
    this.loaders.push(method);
  }

  clear(): void {
    this.loaders = [];
  }

  load(): void {
    this.showSpinner();
    this.executeAll();
  }

  private executeAll(done = () => {
  }): void {
    Promise.all(this.loaders).then((values) => {
      this.hideSpinner();
      done.call(null, values);
    }).catch((error) => {
      console.error(error);
    });
  }

  public showSpinner(): void {
    const el = this.getSpinnerElement();
    if (el) {
      el.style['display'] = 'block';
    }
  }

  public hideSpinner(): void {
    const el = this.getSpinnerElement();
    if (el) {
      el.style['display'] = 'none';
    }
  }

  private getSpinnerElement() {
    return document.getElementById(this._loadingSelector);
  }
}
