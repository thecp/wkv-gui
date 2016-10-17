import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {
  Http,
  Request,
  RequestOptionsArgs,
  Response,
  RequestOptions,
  ConnectionBackend,
  Headers,
  XHRBackend
} from '@angular/http';

import { AppComponent } from '../app.component';

@Injectable()
class HttpService extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(
      super.request(this.prependUrl(url), options)
    );
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(
      super.get(this.prependUrl(url), options)
    );
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(
      super.post(this.prependUrl(url), body, this.getRequestOptionArgs(options))
    );
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(
      super.put(this.prependUrl(url), body, this.getRequestOptionArgs(options))
    );
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(
      super.delete(this.prependUrl(url), options)
    );
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options === null) {
        options = new RequestOptions();
    }
    if (options.headers === null) {
        options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  private intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err, source) => {
      return Observable.throw(err); // TODO error handling
    });
  }

  private prependUrl(url) {
    return 'http://localhost/wkv-api/' + url;
  }
}

export const HTTP_INTERCEPTOR = {
  provide: Http,
  useFactory: (
    backend: XHRBackend,
    defaultOptions: RequestOptions) => new HttpService(backend, defaultOptions),
  deps: [XHRBackend, RequestOptions]
};
