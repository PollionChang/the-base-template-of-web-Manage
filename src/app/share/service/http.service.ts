import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpService {
  courses$: any;

  constructor(private http: HttpClient) {
  }

  public request(options: any | null): Observable<Response> {
    console.log('options', options);
    return Observable.create((observer) => {
      this.courses$ = this.http
        .request(
          options.method,
          options.url,
          {
            responseType: 'json',
            params: options.params,
            body: options.body,
            headers: options.headers
          }).do(
          function (x) {
            console.log('httpService Do Next:', x);
          },
          function (err) {
            console.log('httpService Do Error:', err);
          },
          function () {
            console.log('httpService Do Completed');
          }
        ).subscribe(
          data => {
            observer.next(data);
          },
          (err: HttpErrorResponse) => {
            this.requestError(options.url, err);
            observer.error(err);
          }
        );
    });

  }

  public get(url: string, params?: any): Observable<Response> {
    return this.request({
      method: 'GET',
      url: url,
      params: this.buildURLSearchParams(params)
    });

  }


  public postFormData(url: string, params?: any): Observable<Response> {

    return this.request({
      method: 'POST',
      url: url,
      params: this.buildURLSearchParams(params),
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    });
  }

  requestError(url, error) {
    // nativeService.hideLoading();
    console.error('%c 请求失败 %c', 'color:red', '', 'url', url, 'error', error);
    /*  let status = error.status;
      if (!status || status === -1) {
        self.msgService.pop({type: 'error', body: CODE.reqSystemError});
      } else if (status === 401) {
        let result = error.json();
        self.toasterUNLogin(result.submsg);
      } else if (CODE[status]) {  //  如果有对应错误码提示
        self.msgService.pop({type: 'error', body: CODE[status]});
      } else {
        self.msgService.pop({type: 'error', body: CODE.reqHttpError + status});
      }*/
  }

  /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {HttpParams}
   */
  buildURLSearchParams(paramMap): HttpParams {
    let params = new HttpParams();
    if (!paramMap) {
      return params;
    }
    for (const k in paramMap) {
      if (paramMap.hasOwnProperty(k)) {
        const val = paramMap[k];
        if (val instanceof Date) {
          //  val = DateService.dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
        }
        params = params.set(k, val);
      }
    }
    return params;
  }
}
