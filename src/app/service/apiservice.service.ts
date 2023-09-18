import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://nodeapi-9h7z.onrender.com',
      // Add any other required headers here
    }),
  };

callapi(){
  return this.http.get('https://nodeapi-9h7z.onrender.com/api/org',this.httpOptions)
}

login(username:any,password:any){
  // const jsonData = {
  //   key1: username,
  //   key2: password,
  // };
  
  // let params = new HttpParams();
  // for (const key in jsonData) {
  //   if (jsonData.hasOwnProperty(key)) {
  //     params = params.append(key, jsonData[key]);
  //   }
  // }
  
   let body = { email: username, password: password };

  return this.http.post('https://nodeapi-9h7z.onrender.com/api/orgLogin',body)
}
}
