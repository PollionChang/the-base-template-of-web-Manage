import {Injectable, Inject} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {LoadingMaskService} from './loading-mask.service';
import {HY_INTERCEPTOR_HEADER} from '../../../data/CONFIG';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  token: string;
  clonedRequest: any;
  tokenHeader: string;

  constructor(private authService: AuthService, private loadingMask: LoadingMaskService,
              @Inject(HY_INTERCEPTOR_HEADER) _tokenHeader: string) {
    this.tokenHeader = _tokenHeader;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService.getToken().subscribe(data => {
      this.token = data.getValue();
    });
    if (this.token) {
      this.clonedRequest = req.clone({
        headers: req.headers.set(this.tokenHeader, 'Bearer ' + this.token)
      });
    } else {
      this.clonedRequest = req;
    }
    if (this.clonedRequest.url.indexOf('basic.programlist') > -1 || this.clonedRequest.url.indexOf('basic.params.enum') > -1) {
      this.loadingMask.hideSpinner();
    } else {
      this.loadingMask.showSpinner();
    }
    return next.handle(this.clonedRequest).do(event => {
      this.loadingMask.hideSpinner();
      if (event instanceof HttpResponse) {
      } else {
      }
    });
  }
}
