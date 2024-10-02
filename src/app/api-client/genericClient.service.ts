import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericClientService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Generic API client method to perform a DELETE request.
   * @param url The request URL.
   * @returns An observable with the given response type.
   */
  public genericHttpRequestDelete<TRes>(url: string): Observable<TRes> {
    return this.httpClient.delete<TRes>(url);
  }

  /**
   * Generic API client method to perform a PUT request.
   * @param url The request URL.
   * @param body The body of the request with the given type.
   * @returns An observable with the given response type.
   */
  public genericHttpRequestPut<TReq, TRes>(
    url: string,
    body: TReq
  ): Observable<TRes> {
    return this.httpClient.put<TRes>(url, body);
  }

  /**
   * Generic API client method to perform a PATCH request.
   * @param url The request URL.
   * @param body The body of the request with the given type.
   * @returns An observable with the given response type.
   */
  public genericHttpRequestPatch<TReq, TRes>(
    url: string,
    body: TReq
  ): Observable<TRes> {
    return this.httpClient.patch<TRes>(url, body);
  }

  /**
   * Generic API client method to perform a POST request.
   * @param url The request URL.
   * @param body The body of the request with the given type.
   * @returns An observable with the given response type.
   */
  public genericHttpRequestPost<TReq, TRes>(
    url: string,
    body: TReq
  ): Observable<TRes> {
    return this.httpClient.post<TRes>(url, body);
  }

  /**
   * Generic API client method to perform a GET request.
   * @param url The request URL.
   * @returns An observable with the given response type.
   */
  public genericHttpRequestGet<TRes>(url: string): Observable<TRes> {
    return this.httpClient.get<TRes>(url);
  }
}
