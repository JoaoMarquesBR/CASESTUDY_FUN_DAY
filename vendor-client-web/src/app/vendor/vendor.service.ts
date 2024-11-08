import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { BASE_URL } from '../constants';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  resourceURL: string;
  status : string 

  constructor(public http: HttpClient) {
    this.resourceURL = `${BASE_URL}/vendors`;
    this.status = '';
  } // constructor
  
  get(): Observable<Vendor[]> {
    return this.http
      .get<Vendor[]>(this.resourceURL)
      .pipe(retry(1), catchError(this.handleError));
  } // get

  update(vend: Vendor): Observable<Vendor> {
    return this.http
      .put<Vendor>(`${this.resourceURL}`, vend)
      .pipe(retry(1), catchError(this.handleError));
  } // update

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    error.error instanceof ErrorEvent
      ? // Get client-side error
        (errorMessage = error.error.message)
      : // Get server-side error
        (errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`);
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }}
