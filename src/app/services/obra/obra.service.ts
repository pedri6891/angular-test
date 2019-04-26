import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  constructor(private http:HttpClient) { }

  List():Observable<any>{
    return this.http.get('//localhost:4010/obra/get-all-obras');

  }
  Create(record):Observable<any>{
    return this.http.post('//localhost:4010/obra/create', record)

  }
  Get(id):Observable<any>{
    return this.http.get(`//localhost:4010/obra/get-obra-by-id/${id}`);

  }
  

}
