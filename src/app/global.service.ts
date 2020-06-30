import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor(private http: HttpClient) { }

  updateInformation(message: any) {
		return this.http.post("http://localhost:3010/",message).subscribe(
    res=>{
      console.log(res);
    }
    );
  }
}