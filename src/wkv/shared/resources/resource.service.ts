import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class Resource {

  constructor (protected url: string, protected http: Http) {}

  get(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  query(url?: string): Observable<any[]> {
    return this.http.get(url ? url : this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  save(body: any): Observable<any> {
    let url: string = body.id ? (this.url + '/' + body.id) : this.url;
    return this.http[body.id ? 'put' : 'post'](url, JSON.stringify(body), this.getOptions())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  delete(item: any): Observable<any> {
    return this.http.delete(this.url + '/' + item.id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  // TODO put to interceptor?
  protected extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  protected handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private getOptions(): RequestOptions {
    let headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }
}
