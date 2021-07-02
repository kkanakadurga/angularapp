import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http:HttpClient) { }

  postData(req:any){
    const endpoint ='https://srinivas-flask.herokuapp.com/userDetails';
    return this.http.post(endpoint,req);
  }
 checkUserCredentials(email:any,password:any){
   const endpoint ='https://srinivas-flask.herokuapp.com/checkUserCredentials/' + email + '/' + password;
   return this.http.get(endpoint);
 }

deleteUser(email:any){
  const endpoint ='https://srinivas-flask.herokuapp.com/deleteUser';
  return this.http.delete(endpoint);
}


}