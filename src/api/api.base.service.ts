import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {AlertService} from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string,
              private alertService: AlertService) {
  }

  POST<T>(path: string[], body: any, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.post<T>(apiPath, body, {headers})
      .pipe(
        map((data: any) => {
          this.alertService.showSuccess('Successfully Added!');
          return data as T;
        }),
        catchError((err: HttpErrorResponse) => {
          this.showErrors(err.error);
          return throwError(err);
        }));
  }

  UPDATE<T>(path: string[], body: any, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.put<T>(apiPath, body, {headers})
      .pipe(
        map((data: any) => {
          this.alertService.showSuccess('Successfully Updated!');
          return data as T;
        }),
        catchError(err => {
          this.showErrors(err.error);
          return throwError(err);
        }));
  }


  GET<T>(path: string[], headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.get<T>(apiPath, {headers})
      .pipe(
        map((data: any) => data as T),
        catchError(err => {
          this.showErrors(err.error);
          return throwError(err);
        }));
  }

  DELETE<T>(path: string[], headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.delete<T>(apiPath, {headers})
      .pipe(
        map((data: any) => {
          this.alertService.showSuccess('Successfully deleted!');
          return data as T;
        }),
        catchError(err => {
          this.showErrors(err.error);
          return throwError(err);
        }));
  }


  private showErrors(error: ErrorModel): void {
    if (error != null) {
      if (Array.isArray(error.errors)) {
        error.errors.forEach(val => {
          this.alertService.showWarn(val);
        });

      } else {
        if (error.title != null) {
          this.alertService.showError(error.title);
        } else {
          this.alertService.showError('Server is not responding or cannot find error');
        }
      }
    }

  }

}

interface ErrorModel {
  errors: any;
  status: number;
  title: string;
}
